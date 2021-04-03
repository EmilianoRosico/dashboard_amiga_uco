import React from 'react'

export default function CategoryCard(props) {
    return (
        <>
            {props.description.map((de,i) =>
                <div className="col-lg-6 mb-4" key={de+i}>
                    <div className="card bg-info text-white shadow">
                        <div className="card-body">
                            {de}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
