import React from 'react'


const adminDashboard = () => {
  return (
    <div >
        <a href='/inventory'><button class="backBtn2">Inventory</button></a><br></br>
        <a href='/SupplierList'><button class="backBtn2">Suppliers</button></a><br></br>
        <a href='/OrderList'><button class="backBtn2">Stock Order Details</button></a><br></br>
        <a href='/inventory'><button class="backBtn2">Delivery</button></a><br></br>
        <a href='/EmployeeList'><button class="backBtn2">Employees</button></a><br></br>
        <a href='/inventory'><button class="backBtn2">Finance</button></a><br></br>

    </div>
  )
}

export default adminDashboard;