import React, { useState } from 'react'
import ProductsDetailGridRow from './ProductsDetailGridRow'
import ProductsGridRow from './ProductsGridRow'

export default function ProductsGrid() {

    const [count, setCount] = useState(1)

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <ProductsGridRow values={["id", "Name", "Category", "Description", "Detail"]} />
                        </thead>
                        <tbody>
                            <ProductsDetailGridRow page={count} />
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center h3">
                <span onClick={() => setCount(count > 2 ? count - 1 : 1)}>
                    <i className="fas fa-arrow-circle-left"></i>
                </span>
                <span style={{ margin: 30 }}>Pagina: {count} </span>
                <span onClick={() => setCount(count + 1)}>
                    <i className="fas fa-arrow-circle-right"></i>
                </span>
            </div>
        </div>
    )
}
