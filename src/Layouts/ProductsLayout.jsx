import React from 'react'
import { Outlet } from 'react-router-dom'

const ProductsLayout = () => {
  return (
    <div>
      <div className="home-heading">
          <h1>Products</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default ProductsLayout