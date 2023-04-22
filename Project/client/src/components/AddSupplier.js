import React, {useState} from 'react'
import './form.css'

const AddSupplier = () => {

    // const [inpval, setINP] = useState({

    // })

    // const setdata = (e) => {
    //     console.log(e.target.value);
    // }


    return (
        <div className='container'>
            <a href="/SupplierList"><button className='backBtn'>Supplier List</button></a>
            
            <form className="create" >
            <h3>Add New Supplier</h3>

            <label>Supplier Company Name: </label>
            <input 
                type="text"
                name = "snname"
                // value = {}
                // onChange = {setdata}
            />

            <label>Supplier Name: </label>
            <input 
                type="text"
                name="sname"
            />

            <label>Address: </label>
            <input 
                type="text"
                name="address"
            />

            <label>Email: </label>
            <input 
                type="text"
                name="email"
                
            />

            <label>Website: </label>
            <input 
                type="text"
                name="website"
                
            />

            <label>Phone: </label>
            <input 
                type="number"
                name="phone"
                
            />

            <label>Status: </label>
            
            <select id='status' >
                <option value="status">-select Status-</option>
                <option value="active">Active</option>
                <option value="Inactive">Inactive</option>

            </select>

         
            <center><button className='formBtn' type="submit">Add Supplier</button></center>

            
            
        </form>
        </div>
    )
}

export default AddSupplier;