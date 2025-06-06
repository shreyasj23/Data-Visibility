import "./ProductTable.css";
import React, { useState } from 'react';
import './ProductTable.css';

const ProductTable = () => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (id) => {
    setExpandedRows((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const products = [
    {
      id: 101,
      image: 'https://via.placeholder.com/50',
      name: 'iPhone 15',
      brief: 'Latest Apple flagship phone',
      desc: 'The iPhone 15 comes with the latest A16 Bionic chip, a new Dynamic Island, and a high-resolution Super Retina XDR display.',
      price: '₹80,000',
      launch: '2024-03-15',
      orders: 5000,
      inventory: 150,
      category: 'Mobile',
      supplier: 'Apple Inc.',
      rating: '⭐⭐⭐⭐⭐',
      status: 'Active',
    },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th className="brief">Brief Description</th>
            <th className="desc">Detailed Description</th>
            <th className="price">Price</th>
            <th className="launch">Launch Date</th>
            <th className="orders">Orders</th>
            <th className="inventory">Inventory</th>
            <th className="category">Category</th>
            <th className="supplier">Supplier</th>
            <th className="rating">Rating</th>
            <th>Status</th>
            <th>Expand</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <React.Fragment key={prod.id}>
              <tr>
                <td>{prod.id}</td>
                <td><img src={prod.image} alt={prod.name} /></td>
                <td>{prod.name}</td>
                <td className="brief nowrap">{prod.brief}</td>
                <td className="desc nowrap">{prod.desc}</td>
                <td className="price">{prod.price}</td>
                <td className="launch">{prod.launch}</td>
                <td className="orders">{prod.orders}</td>
                <td className="inventory">{prod.inventory}</td>
                <td className="category">{prod.category}</td>
                <td className="supplier">{prod.supplier}</td>
                <td className="rating">{prod.rating}</td>
                <td>{prod.status}</td>
                <td>
                  <span
                    className="expand-btn"
                    onClick={() => toggleRow(prod.id)}
                  >
                    {expandedRows[prod.id] ? '-' : '+'}
                  </span>
                </td>
              </tr>
              {expandedRows[prod.id] && (
                <tr className="expanded-row">
                  <td colSpan="14">
                    <strong>Brief:</strong> {prod.brief}<br />
                    <strong>Detailed Description:</strong> {prod.desc}<br />
                    <strong>Price:</strong> {prod.price}<br />
                    <strong>Launch Date:</strong> {prod.launch}<br />
                    <strong>Orders:</strong> {prod.orders}<br />
                    <strong>Inventory:</strong> {prod.inventory}<br />
                    <strong>Category:</strong> {prod.category}<br />
                    <strong>Supplier:</strong> {prod.supplier}<br />
                    <strong>Rating:</strong> {prod.rating}
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;