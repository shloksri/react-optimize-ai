const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

// Input: path to component
const [, , componentPath] = process.argv;

if (!componentPath) {
  console.error("❌ Usage: node parsePropsCLI.js <Component.jsx path>");
  process.exit(1);
}

const code = fs.readFileSync(componentPath, "utf-8");

const ast = parse(code, {
  sourceType: "module",
  plugins: ["jsx"],
});

const passedProps = new Set();
const usedProps = new Set();
let topLevelPropName = null; // Like "user", "stats", "product"

traverse(ast, {
  AssignmentExpression(path) {
    const node = path.node;

    if (
      node.left.type === "MemberExpression" &&
      node.left.property.name === "propTypes"
    ) {
      const propTypes = node.right.properties;

      propTypes.forEach((prop) => {
        const propName = prop.key.name;
        const value = prop.value;
        let shapeArgs = null;

        if (
          value.type === "CallExpression" &&
          value.callee.property?.name === "shape"
        ) {
          shapeArgs = value.arguments[0];
        } else if (
          value.type === "MemberExpression" &&
          value.object.type === "CallExpression" &&
          value.object.callee.property?.name === "shape"
        ) {
          shapeArgs = value.object.arguments[0];
        }

        if (shapeArgs?.type === "ObjectExpression") {
          topLevelPropName = propName;
          shapeArgs.properties.forEach((p) => {
            if (p.key?.name) passedProps.add(p.key.name);
          });
        }
      });
    }
  },
});

// --- Phase 2: Extract Used Props like user.name, stats.email ---
traverse(ast, {
  MemberExpression(path) {
    const node = path.node;
    if (
      topLevelPropName &&
      node.object.type === "Identifier" &&
      node.object.name === topLevelPropName &&
      node.property?.name
    ) {
      usedProps.add(node.property.name);
    }
  },
});

// --- Output Summary ---
const passed = Array.from(passedProps);
const used = Array.from(usedProps);
const unused = passed.filter((prop) => !used.includes(prop));

console.log(`✅ Component: ${path.basename(componentPath)}`);
console.log(
  `🟡 Props Passed:       ${passed.length ? passed.join(", ") : "None"}`
);
console.log(`🟢 Props Used:         ${used.length ? used.join(", ") : "None"}`);
console.log(
  `🔺 Unused Props:       ${unused.length ? unused.join(", ") : "None 🎉"}`
);
