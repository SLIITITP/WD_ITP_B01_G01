import { Component } from 'react'
import './form.css'
import inventory from './inventoryDetail'

export default class addProduct extends Component {
 render(){
  return (
    <div className="add_btn mt-2 mb-2">
    <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
    <a href="/inventoryDetail"><button className='backBtn'>View All Products</button></a>
    <a href="/addProduct"><button className='backBtn'>Add Product</button></a>

    

    <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Product Summary</h6>
                </div>
            </div>
            <div className="py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            
                        </div>
                    </div>
                </div>
            </div>
    </div>
    

    
  )
}


 }


