import React, {useState,Component} from 'react'
import './form.css'
import axios from 'axios';



export default class AddSupplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            snname: '',
            sname: '',
            date: '',
            email: '',
            pname: '',
            quantity: '',
            unitprice:'',
            status:''
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

        const { snname, sname, date, email, pname, quantity,unitprice,status } = this.state;

        const data = {
            snname: snname,
            sname: sname,
            date: date,
            email: email,
            pname: pname,
            quantity: quantity,
            unitprice:unitprice,
            status:status

        }
        console.log(data);

        axios.post("/AddOrder/post", data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                var id = res.data.success._id
                window.location.href = `/OrderList`;

                this.setState(
                    {
                        snname: "",
                        sname: "",
                        date: "",
                        email: "",
                        pname: "",
                        quantity: "",
                        unitprice:"",
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
            <a href="/OrderList"><button className='backBtn'>Order List</button></a>
            
            <form className="create" >
            <h3>Add New Order</h3>

            <label>Supplier Company Name: </label>
            <input type="text" name="snname" value={this.state.snname}
                         onChange={this.handleChange} id="formGroupExampleInput"  />
           

            <label>Supplier Name: </label>
            <input type="text" name="sname" value={this.state.sname}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>date: </label>
            <input type="date" name="date" value={this.state.address}
                         onChange={this.handleChange} id="formGroupExampleInput"  />


            <label>Product Name: </label>
            <input type="text" name="pname" value={this.state.pname}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Quantity: </label>
            <input type="number" name="quantity" value={this.state.quantity}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Unit Price: </label>
            <input type="number" name="unitprice" value={this.state.unitprice}
                         onChange={this.handleChange} id="formGroupExampleInput"  />

            <label>Status: </label>
            <input type="text" name="status" value={this.state.status}
                         onChange={this.handleChange} id="formGroupExampleInput"  />
            
           
             {/* <label>Car Make</label>
          <select id="carMake" placeholder="Search by tags" value={this.props.carMake} onChange={this.changeOption.bind(this, 'carMake')}>

          {this.props.carMakeOptions.map(option => (<option key={option} value={option}>{option}</option> ))}
          </select>

          <label>Model</label>
          <select id="model" value={this.props.model} onChange={this.changeOption.bind(this, 'model')}>

          {this.props.modelOptions.map(option => (<option key={option} value={option}>{option}</option> ))}
          </select> */}

         
            <center><button className='formBtn' type="submit" onClick={this.onSubmit}>Add Order</button></center>

            
            
        </form>
        </div>
    )
}

 }