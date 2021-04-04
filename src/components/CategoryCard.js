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

export default function CategoryCard(props) {
    const { data } = useFetch(`http://localhost:3001/api/${props.endpoint}`)
    if (data !== null) {
        return (
            <>
                {data.map((de) =>
                    <div className="col-lg-6 mb-4" key={de.name}>
                        <div className="card bg-info text-white shadow">
                            <div className="card-body" style = {{display: "flex", justifyContent: 'space-between'}}>
                                {de.name}
                                <span>{de.Products.length}</span>
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }
    else {
        return (
            <p>"...loading!"</p>
        )
    }
}
