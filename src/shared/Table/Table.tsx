import React from "react";
import './Table.scss';

const Table = () => {
    return <table className="AppTable">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th className="right">Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cookie</td>
                <td>$0.99</td>
                <td className="right">50</td>
            </tr>
            <tr>
                <td>Milk 1L</td>
                <td>$1.99</td>
                <td className="right">20</td>
            </tr>
            <tr>
                <td>Bread</td>
                <td>$0.99</td>
                <td className="right">100</td>
            </tr>
        </tbody>
    </table>
}

export default Table