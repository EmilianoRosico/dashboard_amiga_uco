import React, { useState, useEffect } from 'react'

//Construyo Hook para que el fetch pueda variar según el endpoint
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            const item = data.data;
            setData(item);
            setLoading(false);
        }
        fetchData()
    }, [url])

    return { data, loading };
}

export default function ProductsDetailGridRow(props) {
    const { data } = useFetch(`http://localhost:3001/api/products/page=${props.page}`)
    if (data !== null) {
        return (
            <>
                {data.map((value, i) =>
                    <tr key={value.id + i}>
                        <td>
                            {value.id}
                        </td>
                        <td>
                            {value.name}
                        </td>
                        <td>
                            {value.category}
                        </td>
                        <td>
                            {value.description}
                        </td>
                        <td>
                            <a href= {value.endpoint}>{value.endpoint}</a>
                        </td>
                    </tr>

                )}
            </>
        )
    }
    else {
        return (
            <tr>
            <td>...loading</td>
            </tr>
        )
    }
}