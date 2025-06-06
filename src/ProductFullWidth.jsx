import React, { useState } from 'react';
import './productfullWidth.css'; 
import { formatNumber } from './utils/validateNum'; 

const productsData = [
    {
        id: 101,
        image: "https://via.placeholder.com/50",
        name: "iPhone 15",
        brief: "Latest Apple flagship phone with advanced features and a stunning display.",
        desc: "The iPhone 15 comes with the latest A16 Bionic chip, a new Dynamic Island, an improved camera system for low-light photography, and a high-resolution Super Retina XDR display. It also boasts longer battery life and new connectivity options.",
        price: 80000, 
        launchDate: "2024-03-15",
        orders: 5000, 
        inventory: 150,
        category: "Mobile",
        supplier: "Apple Inc.",
        rating: "⭐⭐⭐⭐⭐",
        status: "Active"
    }
];


const ProductFullWidth = () => {
    const [expandedRows, setExpandedRows] = useState({});

    const toggleRow = (productId) => {
        setExpandedRows(prevExpandedRows => ({
            ...prevExpandedRows,
            [productId]: !prevExpandedRows[productId]
        }));
    };

    const truncateText = (text, maxLength = 20) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + "...";
    };


    return (
        <div className="table-container-react">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th className="brief-react header-brief">Brief</th>
                        <th className="desc-react header-desc">Description</th>
                        <th className="price-react header-price">Price</th>
                        <th className="launch-react header-launch">Launch</th>
                        <th className="orders-react header-orders">Orders</th>
                        <th className="inventory-react header-inventory">Stock</th>
                        <th className="category-react header-category">Category</th>
                        <th className="supplier-react header-supplier">Supplier</th>
                        <th className="rating-react header-rating">Rating</th>
                        <th>Status</th>
                        <th>Expand</th>
                    </tr>
                </thead>
                <tbody>
                    {productsData.map(product => (
                        <React.Fragment key={product.id}>
                            <tr>
                                <td>{product.id}</td>
                                <td><img src={product.image} alt={product.name} /></td>
                                <td>{product.name}</td>

                                <td className="brief-react">
                                    <span className="tooltip-trigger">
                                        {truncateText(product.brief, 7)}
                                        <span className="tooltip-text"> {product.brief}</span>
                                    </span>
                                </td>

                                <td className="desc-react">
                                    <span className="tooltip-trigger">
                                        {truncateText(product.desc, 7)}
                                        <span className="tooltip-text">{product.desc}</span>
                                    </span>
                                </td>

                                <td className="price-react">₹{formatNumber(product.price)}</td>
                                <td className="launch-react">{product.launchDate}</td>
                                <td className="orders-react">{formatNumber(product.orders)}</td>
                                <td className="inventory-react">{product.inventory}</td>
                                <td className="category-react">{product.category}</td>
                                <td className="supplier-react">{product.supplier}</td>
                                <td className="rating-react">{product.rating}</td>
                                <td>{product.status}</td>
                                <td>
                                    <span
                                        className="expand-btn-react"
                                        onClick={() => toggleRow(product.id)}
                                    >
                                        {expandedRows[product.id] ? '-' : '+'}
                                    </span>
                                </td>
                            </tr>
                            {expandedRows[product.id] && (
                                <tr className="hidden-row-react">
                                    <td colSpan="14">
                                        <strong>ID:</strong> {product.id} <br />
                                        <strong>Name:</strong> {product.name} <br />
                                        <strong>Brief:</strong> {product.brief} <br />
                                        <strong>Detailed Description:</strong> {product.desc}<br />
                                        <strong>Price:</strong> ₹{product.price.toLocaleString()} <br /> {/* Show full price in expand */}
                                        <strong>Launch Date:</strong> {product.launchDate} <br />
                                        <strong>Orders:</strong> {product.orders.toLocaleString()} <br /> {/* Show full orders in expand */}
                                        <strong>Inventory:</strong> {product.inventory} <br />
                                        <strong>Category:</strong> {product.category} <br />
                                        <strong>Supplier:</strong> {product.supplier} <br />
                                        <strong>Rating:</strong> {product.rating} <br/>
                                        <strong>Status:</strong> {product.status}
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

export default ProductFullWidth;