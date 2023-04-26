import React, {Component} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { inventoryToPrint } from './inventoryToPrint';


function withParams(Component) {
    return props => <Component params={
        useParams()
    }/>
}

class printPreveiwInventory extends React.PureComponent {

    

    constructor(props) {
        super(props);

        this.status = "";

        this.state = {
            id: props.params.id,
            inventory: []
        };

    }

    componentDidMount() {
        this.retrievePosts();

    }

    retrievePosts() {
        axios.get("/addProduct/posts").then(res => {
            if (res.data.success) {
                this.setState({inventory: res.data.existingPosts});
                console.log(this.state.inventory)
            }
        });
    }


    // edit
    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
        this.status = value;
    }

    

   onDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this?")) {
    axios.delete(`/addProduct/post/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrievePosts();
}
);
}
};

render() {
    return (
       
        <div className='mt-5'>
            <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
            <ReactToPrint content={() => this.componentRef}>
                <PrintContextConsumer>
                    {({ handlePrint }) => (
                        <button className='backBtn' onClick={handlePrint}>Print this out!</button>
                    )}
                </PrintContextConsumer>
            </ReactToPrint>
            <inventoryToPrint ref={el => (this.componentRef = el)} > 
            <div className="container">
                <h2>Supreme Wine Stores Inventory Detail Report</h2>
                <h6>Supreme Wine Stores</h6>
                <h6>No. 10, Gamini Road, Galle</h6>
                <h6>071 223 4567</h6>
                
            <div className="table-responsive">
                 <table className="table" >
                     <thead>
                            <tr className="table-dark" >
                                <th scope="col" >#</th>
                                <th scope="col" >Product Name</th>
                                <th scope="col" >Category</th>
                                <th scope="col" >Price(LKR)</th>
                                <th scope="col" >Quantity</th>
                                <th scope="col" >Total Price(LKR)</th>
                                <th scope="col" ></th>
                            </tr>
                     </thead>
                     <tbody> {
                        this.state.inventory.map((inventory, index) => 
                        (
                            
                            <tr key={index}>

                                <th scope="row">
                                    {
                                    index + 1
                                }</th>

                                <td> {
                                    inventory.name
                                }</td>

                                <td>{
                                    inventory.category
                                }</td>

                                <td>{
                                    inventory.price
                                }</td>

                                <td>{
                                    inventory.quantity
                                }</td>
                                <td>{
                                    inventory.quantity*inventory.price
                                }</td>
                                

                               
                            </tr>
                        ))
                    } </tbody>

                     
                 </table>

                

                        
   
             </div>
         </div>
         </inventoryToPrint>
     </div>


      
    )
}
}





    
export default withParams(printPreveiwInventory);