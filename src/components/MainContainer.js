import React from 'react'
import Card from './Card'
import CategoryCard from './CategoryCard'
import LastProductAdded from './LastProductAdded'
import ProductsGrid from './ProductsGrid'

export default function MainContainer() {
    return (
        <>
            <div className="container-fluid">
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                </div>
                <div className="row">
                    <Card color='border-left-primary'
                        endpoint='http://localhost:3001/api/products'
                        subtitleStyle='text-primary'
                        subtitle='Products in Data Base'
                        icon='fa-clipboard-list' />

                    <Card color='border-left-success'
                        endpoint='http://localhost:3001/api/wineries'
                        subtitleStyle='text-success'
                        subtitle='Amount in wineries'
                        icon='fa-wine-glass-alt' />

                    <Card color='border-left-warning'
                        endpoint='http://localhost:3001/api/users'
                        subtitleStyle='text-warning'
                        subtitle='Users quantity'
                        icon='fa-user-check' />

                </div>
                <div className="row">
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                            </div>
                            <LastProductAdded />
                        </div>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Wineries in Data Base</h6>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <CategoryCard endpoint= "wineries" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mb-4" >
                    <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
                    <ProductsGrid />
                    </div>
                </div>
            </div>
        </>
    )
}
