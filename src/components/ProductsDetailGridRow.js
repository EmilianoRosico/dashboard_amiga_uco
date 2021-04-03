import React from 'react'

export default function ProductsDetailGridRow(props) {
    return (
        <tr>
            {props.values.map((value, i) =>
            <td key={value + i}>
                {value}
            </td>
            )}
        </tr>
    )
}