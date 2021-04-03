import React, { useState, useEffect } from 'react'

//Construyo Hook para que el fetch pueda variar según el endpoint
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        const item = data.meta;
        setData(item);
        setLoading(false);
    }
    fetchData()
    },[url])

    return {data, loading};
}

export default function Card(props) {
    const {data, loading} = useFetch(props.endpoint)

    let customStyle = "card shadow h-100 py-2 " + props.color;
    let customIcons = "fas  fa-2x text-gray-300 " + props.icon;
    let subStyle = "text-xs font-weight-bold text-uppercase mb-1 " + props.subtitleStyle;
    return (
        <div className="col-md-4 mb-4">
            <div className={customStyle}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={subStyle}> {props.subtitle}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{loading ? "...loading" : data.count}</div>
                        </div>
                        <div className="col-auto">
                            <i className={customIcons}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}