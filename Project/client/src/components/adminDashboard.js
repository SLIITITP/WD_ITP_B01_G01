import React from 'react'

const adminDashboard = () => {
  return (
    <div>
        <a href='/inventory'><button class="btn btn-primary">Inventory</button></a><br></br>
        <a href='/SupplierList'><button class="btn btn-primary">Supplier Details</button></a><br></br>
        <a href='/SOrderLsit'><button class="btn btn-primary">Supplier Stock Order Details</button></a><br></br>
        <a href='/pieChart'><button class="backBtn2">Finance</button></a><br></br>

    </div>
  )
}

export default adminDashboard;