import React from "react";
//import './Table.scss';

const Table = () => {
    return <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Cookie</td>
                <td>$0.99</td>
                <td>50</td>
            </tr>
            <tr>
                <td>Milk 1L</td>
                <td>$1.99</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Bread</td>
                <td>$0.99</td>
                <td>100</td>
            </tr>
        </tbody>
    </table>
}

export default Table