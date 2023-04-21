import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import "./delivery.css"
function withParams(Component) {
  return props => <Component params={useParams()} />
}

class DisplayInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      posts: [],
      name: '',
      email: '',
      message: '',
      phone: '',
      address : '',
      town : ''
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    const id = this.state.id
    axios.get(`/post/${id}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        this.setState({
          posts: res.data.post
        });
        console.log(this.state.posts);
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
    // e.preventDefault();
    const id = this.state.id

    const { name, email, message ,phone,address,town} = this.state;

    let data =  this.state.posts;  
    data = {
      name: name.length != 0 ? name : data.name,
      email: email.length != 0 ? email : data.email,
      message: message.length != 0 ? message : data.message,
      phone: phone.length != 0 ? phone : data.phone,
      address: address.length != 0 ? address : data.address,
      town: town.length != 0 ? town : data.town
    }

    axios.put(`/post/${id}`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        alert("Updated Successfully");
        var id = res.data.success._id

        this.setState(
          {
            name: "",
            email: "",
            message: "",
            address: "",
            town: "",
            phone: ""
          }
        )
      }
    })
  }

  onDelete = (id) => {
    axios.delete(`/post/${id}`).then((res) => {
      alert("Deleted Successfully");
      this.retrievePosts();
    })
  }

  render() {
    const { _id, name,address, email, message,town ,phone} = this.state.posts;
    return (
<div>

  
      <div className="contact-form-2">

        <h2>Your Details</h2>
        <form>

          <p for="formGroupExampleInput" class="form-label">Name</p>
          <input type="text" class="form-control" name="name" value={this.state.name}
            onChange={this.handleChange} id="formGroupExampleInput" placeholder={name}/>

          <p for="exampleFormControlTextarea1" class="form-label">Address</p>
          <textarea class="form-control" name="address" value={this.state.address}
            onChange={this.handleChange} id="exampleFormControlTextarea1" placeholder={address} rows="3"></textarea>

          <p for="formGroupExampleInput2" class="form-label">Email</p>
          <input type="text" class="form-control" name="email" value={this.state.email}
            onChange={this.handleChange} id="formGroupExampleInput2" placeholder={email} />
            
            <p for="formGroupExampleInput2" class="form-label">Phone</p>
          <input type="text" class="form-control" name="phone" value={this.state.phone}
            onChange={this.handleChange} id="formGroupExampleInput2" placeholder={phone} />

          <p for="formGroupExampleInput" class="form-label">Town</p>
          <input type="text" class="form-control" name="town" value={this.state.town}
            onChange={this.handleChange} id="formGroupExampleInput" placeholder={town} />

          <p for="exampleFormControlTextarea1" class="form-label">Notes</p>
          <textarea class="form-control" name="message" value={this.state.message}
            onChange={this.handleChange} id="exampleFormControlTextarea1" placeholder={message} rows="3"></textarea>

          <button className="btn btn-danger" type="submit" style={{ marginTop: '15px' }} onClick={() => this.onDelete([_id])}>
            <i className="fas fa-trash-alt"></i> Delete</button><br />

          <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>

            <i className="fas fa-edit"></i> Edit

          </button>

          

        </form>

      </div>



      </div>

    )
  }
}



export default withParams(DisplayInfo);






