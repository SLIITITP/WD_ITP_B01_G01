import React, {useState} from 'react'
import './form.css'

const addProduct = () => {

  

    return (
        <div className='container'>
            <a href="/inventoryDetail"><button className='backBtn'>All Products</button></a>
            
            <form className="create" >
            <h3>Add New Product</h3>

            <label>Product Name: </label>
            <input 
                type="text"
                name = "name"
            />

            <label>Category: </label>
            <input 
                type="text"
                name="category"
            />

            <label>Price(LKR): </label>
            <input 
                type="number"
                name="price"
            />

            <label>Quantity: </label>
            <input 
                type="number"
                name="quantity"
                
            />

            <label>Capacity(ml): </label>
            <input 
                type="number"
                name="capacity"
                
            />

            <label>Material: </label>
            <input 
                type="text"
                name="material"
                
            />

            <label>Percentage(%): </label>
            <input 
                type="number"
                name="percentage"
                
            />

            <label>Country: </label>
            <input 
                type="text"
                name="country"
                
            />

            <label>URL of the image: </label>
            <input
                type="text"
                name="image"
            />

            <center><button className='formBtn' type="submit">Add Product</button></center>

            
            
        </form>
        </div>
    )
}

export default addProduct