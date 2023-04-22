import React from 'react'

const adminDashboard = () => {
  return (
    <div>
        <a href='/inventory'><button class="btn btn-primary">Inventory</button></a>
        <a href='/SupplierList'><button class="btn btn-primary">Supplier Details</button></a>
    </div>
  )
}

export default adminDashboard