import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import "./form.css"
function withParams(Component) {
  return props => <Component params={useParams()} />
}

class EditSupplier extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      supplier: [],
      snnname: '',
      sname: '',
      address: '',
      email: '',
      website: '',
      phone: '',
      status:'',
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    const id = this.state.id
    axios.get(`/SupplierList/post/${id}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        this.setState({
          supplier: res.data.post
        });
        console.log(this.state.supplier);
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

    const {snname, sname, address, email, website, phone,status  } = this.state;

    let data =  this.state.supplier;  
    data = {
      snname: snname.length != 0 ? snname : data.snname,
      sname: sname.length != 0 ? sname : data.sname,
      address: address.length != 0 ? address : data.address,
      email: email.length != 0 ? email : data.email,
      website: website.length != 0 ? website : data.website,
      phone: phone.length != 0 ? phone : data.phone,
      status: status.length != 0 ? status : data.status
    }


    axios.put(`/EditSupplier/post/${id}`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        alert("Updated Successfully");
        var id = res.data.success._id
        //window.location.href=`/contactdisplay/${id}`;

        this.setState(
          {
                snnname: '',
                sname: '',
                address: '',
                email: '',
                website: '',
                phone: '',
                status: '',
          }
        )
      }
    })

  }



  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios.delete(`/contact/post/${id}`).then((res) => {
        alert("Delete Successfully");
        this.retrievePosts();
      });
    }
  };


  render() {
    
    const { _id, snname, sname, address, email, website, phone,status  } = this.state.supplier;
    return (
        <div className='container'>
        <a href="/SupplierList"><button className='backBtn'>Supplier List</button></a>
        
        <form className="create" >
        <h3>Add New Supplier</h3>

        
        {/* <label>ID: </label>
        <input type="text" name="_id" value={this.state._id}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={_id}  /> */}



        <label>Supplier Company Name: </label>
        <input type="text" name="snname" value={this.state.snnname}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={snname}  />
       

        <label>Supplier Name: </label>
        <input type="text" name="sname" value={this.state.sname}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={sname} />

        <label>Address: </label>
        <input type="text" name="address" value={this.state.address}
                     onChange={this.handleChange} id="formGroupExampleInput"placeholder={address}  />

        <label>Email: </label>
        <input type="text" name="email" value={this.state.email}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={email}  />

        <label>Website: </label>
        <input type="text" name="website" value={this.state.website}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={website} />

        <label>Phone: </label>
        <input type="number" name="phone" value={this.state.phone}
                     onChange={this.handleChange} id="formGroupExampleInput"  placeholder={phone}/>

        <label>Status: </label>
        
        <select onChange={this.handleChange} id="formGroupExampleInput" value={this.state.status}  name="status" placeholder={status}>
            <option value="active">Active</option>
            <option value="Inactive">Inactive</option>

        </select>

     
        <center><a href='/SupllierList'><button className='formBtn' type="submit" onClick={this.onSubmit}>Update Supplier</button></a></center>

        
        
    </form>
    </div>

     





    )
  }
}



export default withParams(EditSupplier);