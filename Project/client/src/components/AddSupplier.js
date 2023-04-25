import React, {useState,Component} from 'react'
import './form.css'
import axios from 'axios';


//const AddSupplier = () => {
export default class AddSupplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplier: [],
            snname: '',
            sname: '',
            address: '',
            email: '',
            website: '',
            phone: '',
            status:'',
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { snname, sname, address, email, website, phone,status } = this.state;

        const data = {
            snname: snname,
            sname: sname,
            address: address,
            email: email,
            website: website,
            phone: phone,
            status:status

        }
        console.log(data);

        axios.post("/AddSupplier/post", data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                var id = res.data.success._id
                window.location.href = `/SupplierList`;

                this.setState(
                    {
                        snname: "",
                        sname: "",
                        address: "",
                        email: "",
                        website: "",
                        phone: "",
                        status:""
                    }
                )
            }
        })

    }



 render(){
    return (
        <div className='container'>
            <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
            <a href="/SupplierList"><button className='backBtn'>Supplier List</button></a>
            
            <form className="create" >
            <h3>Add New Supplier</h3>

            <label>Supplier Company Name: </label>
            <input type="text" name="snname" value={this.state.snname}
                         onChange={this.handleChange} id="formGroupExampleInput"  />
           

            <label>Supplier Name: </label>
            <input type="text" name="sname" value={this.state.sname}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Address: </label>
            <input type="text" name="address" value={this.state.address}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Email: </label>
            <input type="text" name="email" value={this.state.email}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Website: </label>
            <input type="text" name="website" value={this.state.website}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Phone: </label>
            <input type="number" name="phone" value={this.state.phone}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Status: </label>
            <input type="status" name="status" value={this.state.status}
                         onChange={this.handleChange} id="formGroupExampleInput"  />
            
           
             {/* <label>Car Make</label>
          <select id="carMake" placeholder="Search by tags" value={this.props.carMake} onChange={this.changeOption.bind(this, 'carMake')}>

          {this.props.carMakeOptions.map(option => (<option key={option} value={option}>{option}</option> ))}
          </select>

          <label>Model</label>
          <select id="model" value={this.props.model} onChange={this.changeOption.bind(this, 'model')}>

          {this.props.modelOptions.map(option => (<option key={option} value={option}>{option}</option> ))}
          </select> */}

         
            <center><button className='formBtn' type="submit" onClick={this.onSubmit}>Add Supplier</button></center>

            
            
        </form>
        </div>
    )
}

 }