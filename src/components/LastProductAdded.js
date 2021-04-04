import React, {useState, useEffect} from 'react'

//Construyo Hook para que el fetch pueda variar según el endpoint
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            const item = data;
            setData(item);
            setLoading(false);
        }
        fetchData()
    }, [url])

    return { data, loading };
}

export default function LastProductAdded() {
    const { data, loading } = useFetch('http://localhost:3001/api/lastProduct')
    const hyperLink = loading?"":`http://localhost:3001/products/${data.id}`
    return (
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 25 + 'rem' }} src={loading? "...loading":`http://localhost:3001/${data.image}`}  alt="imgOfProduct" />
            </div>
            <p className="h3">{loading ? "...loading!" : data.name}</p>
            <p>{loading ? "...loading!" : data.detail}</p>
            <a href= {hyperLink}>View product detail</a>
        </div>
    )
}
