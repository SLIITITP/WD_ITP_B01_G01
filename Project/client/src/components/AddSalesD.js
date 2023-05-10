import React, {useState,Component} from 'react'
import './form.css'
import axios from 'axios';


//const SalesD = () => {
export default class AddSalesD extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sales: [],
            Category: '',
            date: '',
            Quantity: '',
            TQuantity: '',
            TPrice: ''
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

        const { Category,date,Quantity,TQuantity,TPrice } = this.state;

        const data = {
            Category: Category,
            date: date,
            Quantity: Quantity,
            TQuantity: TQuantity,
            TPrice: TPrice
        }
        console.log(data);

        axios.post("/AddSalesD/post", data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                var id = res.data.success._id
                window.location.href = `/SalesList`;

                this.setState(
                    {
                        Category: "",
                        date: "",
                        Quantity: "",
                        TQuantity: "",
                        TPrice: ""
                    }
                )
            }
        })

    }

 render(){
    return (
        <div className='container'>
  <a href="/SalesList"><button className='backBtn'>Sales Details</button></a>
  
  <form className="create" onSubmit={this.onSubmit}>
    <h3>Add Details</h3>

    <label>Item Category </label>
    <input type="text" name="Category" value={this.state.Category} onChange={this.handleChange} id="formGroupExampleInput" placeholder="Category" required />
   
    <label>Quantity(bottles) </label>
    <input type="number" name="Quantity" value={this.state.Quantity} onChange={this.handleChange} id="formGroupExampleInput" placeholder="Quantity" min="1" required />

    <label>Date: </label>
    <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required max={new Date().toISOString().split("T")[0]} />

    <label>Target Quantity(bottles): </label>
    <input type="number" name="TQuantity" value={this.state.TQuantity} onChange={this.handleChange} id="formGroupExampleInput" placeholder="Quantity" min="1" required />

    <label>Total Price: </label>
    <input type="number" name="TPrice" value={this.state.TPrice} onChange={this.handleChange} id="formGroupExampleInput" placeholder="Rs." step="0.01" min="0" required />
    
    <center><button className='formBtn' type="submit">Add Details</button></center>
  </form>
</div>
    )
}

 }
   

//export default AddSalesD;