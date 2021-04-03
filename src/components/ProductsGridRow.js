import React from 'react'

export default function ProductsGridRow(props) {
    return (
        <tr>
            {props.values.map((value, i) =>
            <th key={value + i}>{value}</th>
            )}
        </tr>
    )
}
