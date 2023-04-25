import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import "./form.css"
function withParams(Component) {
  return props => <Component params={useParams()} />
}

class EditOrder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      order: [],
      snname: '',
      sname: '',
      date: '',
      email: '',
      pname: '',
      quantity: '',
      unitprice:'',
      status:''
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    const id = this.state.id
    axios.get(`/OrderList/post/${id}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        this.setState({
          order: res.data.post
        });
        console.log(this.state.order);
      }

    });
  }


  //edit 
  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    const id = this.state.id

    const {snname, sname, date, email, pname, quantity,unitprice,status   } = this.state;

    let data =  this.state.order;  
    data = {
      snname: snname.length != 0 ? snname : data.snname,
      sname: sname.length != 0 ? sname : data.sname,
      date: date.length != 0 ? date : data.date,
      email: email.length != 0 ? email : data.email,
      pname: pname.length != 0 ? pname : data.pname,
      quantity: quantity.length != 0 ? quantity : data.quantity,
      unitprice: unitprice.length != 0 ? unitprice : data.unitprice,
      status: status.length != 0 ? status : data.status,
      
    }


    axios.put(`/EditOrder/post/${id}`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        alert("Updated Successfully");
        var id = res.data.success._id
        window.location.href = `/OrderList`;

        this.setState(
          {
            snname: '',
            sname: '',
            date: '',
            email: '',
            pname: '',
            quantity: '',
            unitprice:'',
            status:''
          }
        )
      }
    })

  }



  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios.delete(`/OrderList/post/${id}`).then((res) => {
        alert("Delete Successfully");
        this.retrievePosts();
      });
    }
  };


  render() {
    
    const { _id, snname, sname, date, email, pname, quantity,unitprice,status } = this.state.order;
    return (
        <div className='container'>
        <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
        <a href="/OrderList"><button className='backBtn'>Order List</button></a>
        
        <form className="create" >
        <h3>Update Order</h3>


        
        {/* <label>ID: </label>
        <input type="text" name="_id" value={this.state._id}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={_id}  /> */}



        <label>Supplier Company Name: </label>
        <input type="text" name="snname" value={this.state.snname}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={snname}  />
       

        <label>Supplier Name: </label>
        <input type="text" name="sname" value={this.state.sname}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={sname} />

        <label>Date: </label>
        <input type="date" name="date" value={this.state.date}
                     onChange={this.handleChange} id="formGroupExampleInput"placeholder={date}  />

        <label>Email: </label>
        <input type="text" name="email" value={this.state.email}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={email}  />

        <label>Product Name: </label>
        <input type="text" name="pname" value={this.state.pname}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={pname} />

        <label>Quantity: </label>
        <input type="number" name="quantity" value={this.state.quantity}
                     onChange={this.handleChange} id="formGroupExampleInput"  placeholder={quantity}/>

        <label>UnitPrice: </label>
        <input type="number" name="unitprice" value={this.state.unitprice}
                     onChange={this.handleChange} id="formGroupExampleInput"  placeholder={unitprice}/>

        <label>Status: </label>
        <input type="text" name="status" value={this.state.status}
                     onChange={this.handleChange} id="formGroupExampleInput"  placeholder={status}/>


       

     
        <center><a href='/OrderList'><button className='formBtn' type="submit" onClick={this.onSubmit}>Update Order</button></a></center>

        
        
    </form>
    </div>

     





    )
  }
}



export default withParams(EditOrder);