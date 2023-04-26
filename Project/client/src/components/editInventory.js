import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import "./form.css"
function withParams(Component) {
  return props => <Component params={useParams()} />
}

class editInventory extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      inventory: [],
            name: '',
            category: '',
            price: '',
            quantity: '',
            capacity: '',
            material: '',
            percentage:'',
            country:'',
            description:'',
            image:'',
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    const id = this.state.id
    axios.get(`/inventoryDetail/post/${id}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        this.setState({
          inventory: res.data.post
        });
        console.log(this.state.inventory);
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

    const {name, category, price, quantity, capacity, material,percentage,country,description,image   } = this.state;

    let data =  this.state.inventory;  
    data = {
        name: name.length != 0 ? name : data.name,
        category: category.length != 0 ? category : data.category,
        price: price.length != 0 ? price : data.price,
        quantity: quantity.length != 0 ? quantity : data.quantity,
        capacity: capacity.length != 0 ? capacity : data.capacity,
        material: material.length != 0 ? material : data.material,
        percentage: percentage.length != 0 ? percentage : data.percentage,
        country: country.length != 0 ? country : data.country,
        description: description.length != 0 ? description : data.description,
        image: image.length != 0 ? image : data.image
      
    }


    axios.put(`/editInventory/post/${id}`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        alert("Updated Successfully");
        var id = res.data.success._id
        window.location.href = `/inventoryDetail`;

        this.setState(
          {
            name: '',
            category: '',
            price: '',
            quantity: '',
            capacity: '',
            material: '',
            percentage:'',
            country:'',
            description:'',
            image:''
          }
        )
      }
    })

  }



  onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      axios.delete(`/SupplierList/post/${id}`).then((res) => {
        alert("Delete Successfully");
        this.retrievePosts();
      });
    }
  };


  render() {
    
    const { _id, name, category, price, quantity, capacity, material,percentage,country,description,image  } = this.state.inventory;
    return (
        <div className='container'>
            <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
            <a href="/inventoryDetail"><button className='backBtn'>All Products</button></a>
            
            <form className="create" >
            <h3>Update Product</h3>

            <label>Product Name: </label>
            <input type="text" name="name" value={this.state.name}
                         onChange={this.handleChange} id="formGroupExampleInput"  placeholder={name}/>
           
            <label>Category: </label>
            <input type="text" name="category" value={this.state.category}
                         onChange={this.handleChange} id="formGroupExampleInput"  placeholder={category}/>

            <label>Price(LKR): </label>
            <input type="number" name="price" value={this.state.price}
                         onChange={this.handleChange} id="formGroupExampleInput"  placeholder={price}/>

            <label>Quantity: </label>
            <input type="number" name="quantity" value={this.state.quantity}
                         onChange={this.handleChange} id="formGroupExampleInput"  placeholder={quantity}/>

            <label>Capacity(ml): </label>
            <input type="number" name="capacity" value={this.state.capacity}
                         onChange={this.handleChange} id="formGroupExampleInput"  placeholder={capacity}/>

            <label>Material: </label>
            <input type="text" name="material" value={this.state.material}
                         onChange={this.handleChange} id="formGroupExampleInput"  placeholder={material}/>

            <label>Percentage(%): </label>
            <input type="number" name="percentage" value={this.state.percentage}
                            onChange={this.handleChange} id="formGroupExampleInput"  placeholder={percentage}/>

            <label>Country: </label>
            <input type="text" name="country" value={this.state.country}
                            onChange={this.handleChange} id="formGroupExampleInput"  placeholder={country}/>

            <label>Description: </label>
            <textarea name="description" value={this.state.description}
                            onChange={this.handleChange} id="formGroupExampleInput"  placeholder={description}></textarea>

            <label>URL of the Image: </label>
            <input type="text" name="image" value={this.state.image}
                            onChange={this.handleChange} id="formGroupExampleInput"  placeholder={image}/> 

            <center><button className='formBtn' type="submit" onClick={this.onSubmit}>Update Product</button></center>  
        </form>
        </div>
     





    )
  }
}



export default withParams(editInventory);