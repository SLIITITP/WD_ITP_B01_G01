import React from 'react'
import './form.css'

const adminDashboard = () => {
  return (
    <div>
        <a href='/inventory'><button class="dashBtn">Inventory</button></a><br></br>
        <a href='/SupplierList'><button class="dashBtn">Supplier Details</button></a><br></br>
        <a href='/SOrderLsit'><button class="dashBtn">Supplier Stock Order Details</button></a><br></br>
        

    </div>
  )
}

export default adminDashboard;