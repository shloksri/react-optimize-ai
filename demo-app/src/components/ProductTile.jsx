import PropTypes from "prop-types";
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
const ProductTile = ({ products }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <h3 className="text-lg font-semibold">{products.productName}</h3>
      <p>Price: ₹{products.price}</p>
    </div>
  );
};

ProductTile.propTypes = {
  products: PropTypes.shape({
    productName: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
    stockCount: PropTypes.number,
    discount: PropTypes.number,
  }).isRequired,
};

export default ProductTile;
