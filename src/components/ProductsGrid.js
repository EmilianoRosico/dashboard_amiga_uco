import React from 'react'
import ProductsDetailGridRow from './ProductsDetailGridRow'
import ProductsGridRow from './ProductsGridRow'

export default function ProductsGrid() {
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <ProductsGridRow values= {["Name","Description","Price","Categories","Colors","Stock"]} />
                        </thead>
                        <tfoot>
                        <ProductsGridRow values= {["Name","Description","Price","Categories","Colors","Stock"]} />
                        </tfoot>
                        <tbody>
                            <ProductsDetailGridRow values= {["Tiger Nixon","System Architect","$320.800",[1,2,3],"","245"]} />
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>$320,800</td>
                                <td>
                                    <ul>
                                        <li>Category 01</li>
                                        <li>Category 02</li>
                                        <li>Category 03</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li><span className="text-danger">Red</span></li>
                                        <li><span className="text-primary">Blue</span></li>
                                        <li><span className="text-success">Green</span></li>
                                    </ul>
                                </td>
                                <td>245</td>
                            </tr>
                            <tr>
                                <td>Jane Doe</td>
                                <td>Fullstack developer</td>
                                <td>$320,800</td>
                                <td>
                                    <ul>
                                        <li>Category 01</li>
                                        <li>Category 02</li>
                                        <li>Category 03</li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li><span className="text-danger">Red</span></li>
                                        <li><span className="text-primary">Blue</span></li>
                                        <li><span className="text-success">Green</span></li>
                                    </ul>
                                </td>
                                <td>245</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
