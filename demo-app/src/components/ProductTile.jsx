import React from "react";

/**
 * ProductTile displays a product's name and price.
 *
 * Used Props:
 * - productName
 * - price
 *
 * Unused Props:
 * - category
 * - stockCount
 * - discount
 */
const ProductTile = ({
  productName,
  price,
  category,
  stockCount,
  discount,
}) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <h3 className="text-lg font-semibold">{productName}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default ProductTile;
