import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";
import "./form.css"
function withParams(Component) {
  return props => <Component params={useParams()} />
}

class EditSalesD extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: props.params.id,
      sales: [],
      Category: '',
      Date: '',
      Quantity: '',
      TQuantity: '',
      TPrice: ''
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    const id = this.state.id
    axios.get(`/SalesList/post/${id}`).then((res) => {
      console.log(res.data.post);
      if (res.data.success) {
        this.setState({
          sales: res.data.post
        });
        console.log(this.state.sales);
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

    const {Category,Quantity,TQuantity,TPrice  } = this.state;

    let data =  this.state.sales;  
    data = {
        Category: Category.length != 0 ? Category : data.Category,
        Date: Date.length != 0 ? Date : data.Date,
        Quantity: Quantity.length != 0 ? Quantity : data.Quantity,
        TQuantity: TQuantity.length != 0 ? TQuantity : data.TQuantity,
        TPrice: TPrice.length != 0 ? TPrice : data.TPrice,
    }


    axios.put(`/EditSalesD/post/${id}`, data).then((res) => {
      if (res.data.success) {
        console.log(res.data.success._id);
        alert("Updated Successfully");
        var id = res.data.success._id
        window.location.href=`/SalesList`;

        this.setState(
          {
            Category: '',
            Date: '',
            Quantity: '',
            TQuantity: '',
            TPrice: ''
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
    
    const { _id, Category,Date,Quantity,TQuantity,TPrice  } = this.state.sales;
    return (
        <div className='container'>
        <a href="/SalesList"><button className='backBtn'>Sales Details</button></a>
        
        <form className="create" >
        <h3>Update Sales Details</h3>


        <label>Item Category: </label>
        <input type="text" name="Category" value={this.state.Category}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={Category}  />

        <label>Date </label>
        <input type="date" name="report id" value={this.state.repor}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={Date}  />

        <label>Quantity(bottles): </label>
        <input type="text" name="Quantity" value={this.state.Quantity}
                     onChange={this.handleChange} id="formGroupExampleInput"placeholder={Quantity}  min="1"  />

        <label>Target Quantity(bottles): </label>
        <input type="text" name="TQuantity" value={this.state.TQuantity}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={TQuantity}  min="1"  />

        <label>Total Price: </label>
        <input type="text" name="TPrice" value={this.state.TPrice}
                     onChange={this.handleChange} id="formGroupExampleInput" placeholder={TPrice}step="0.01" min="0" />

            
        <center><a href='/SalesList'><button className='formBtn' type="submit" onClick={this.onSubmit}>Update Details</button></a></center>

        
        
    </form>
    </div>



    )
  }
}



export default withParams(EditSalesD);