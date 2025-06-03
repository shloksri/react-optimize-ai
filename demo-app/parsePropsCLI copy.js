// parsePropsCLI.js
const fs = require("fs");
const path = require("path");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;

// Input path
const [, , componentPath] = process.argv;

if (!componentPath) {
  console.error("Usage: node parsePropsCLI.js <Component.jsx path>");
  process.exit(1);
}

const code = fs.readFileSync(componentPath, "utf-8");

const ast = parse(code, {
  sourceType: "module",
  plugins: ["jsx"],
});

const passedProps = new Set();
let foundShape = false;

// Phase 1 – read shape from PropTypes
traverse(ast, {
  AssignmentExpression(path) {
    const { node } = path;

    if (
      node.left.type === "MemberExpression" &&
      node.left.property.name === "propTypes"
    ) {
      const propTypes = node.right.properties;

      propTypes.forEach((prop) => {
        if (
          prop.key.name === "user" &&
          prop.value.type === "CallExpression" &&
          prop.value.callee.property?.name === "shape"
        ) {
          const shapeProps = prop.value.arguments[0].properties;
          shapeProps.forEach((p) => passedProps.add(p.key.name));
          foundShape = true;
        }
      });
    }
  },
});

if (!foundShape) {
  console.warn("⚠️ Could not find user: PropTypes.shape({...}) definition.");
}

// Phase 2 – extract used props
const usedProps = new Set();

traverse(ast, {
  MemberExpression(path) {
    const { node } = path;
    if (node.object.name === "user" && node.property?.name) {
      usedProps.add(node.property.name);
    }
  },
});

// Results
const passed = Array.from(passedProps);
const used = Array.from(usedProps);
const unused = passed.filter((p) => !used.includes(p));

console.log(`✅ Component: ${path.basename(componentPath)}`);
console.log(
  `🟡 Props Passed:       ${
    passed.length ? passed.join(", ") : "❌ None Detected"
  }`
);
console.log(
  `🟢 Props Used:         ${used.length ? used.join(", ") : "❌ None Detected"}`
);
console.log(
  `🔺 Unused Props:       ${unused.length ? unused.join(", ") : "None 🎉"}`
);
