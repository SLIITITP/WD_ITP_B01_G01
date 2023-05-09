import React, { Component } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
function withParams(Component) {
    return props => <Component params={
        useParams()
    } />
}

class PrintPreviewOrder extends Component {

    constructor(props) {
        super(props);

        this.status = "";

        this.state = {
            id: props.params.id,
            order: [],
            searchKey: "",
        };

    }

    componentDidMount() {
        this.retrievePosts();

    }

    retrievePosts() {
        axios.get("/AddOrder/posts").then(res => {
            if (res.data.success) {
                this.setState({ order: res.data.existingPosts });
                console.log(this.state.order)
            }
        });
    }


    // edit
    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        });
        this.status = value;
    }

    onSave = (id) => {
        let data = this.state.order.filter((post) => post._id === id)[0];
        data.status = this.status;

        axios.put(`/AddOrder/post/${id}`, data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                alert("Updated Successfully");
                var id = res.data.success._id

                this.setState({
                    snname: "",
                    sname: "",
                    date: "",
                    email: "",
                    pname: "",
                    quantity: "",
                    unitprice: "",
                    status: ""

                })
            }
        })
    }


    onDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            axios.delete(`/AddOrder/post/${id}`).then((res) => {
                alert("Delete Successfully");
                this.retrievePosts();
            });
        }
    };


    //search part
    handleSearchKeyChange = (e) => {
        const searchKey = e.currentTarget.value;
        this.setState({ searchKey });
        this.filterData(this.state.order, searchKey);
    };

    filterData(posts, searchkey) {
        const result = posts.filter((post) =>
            post.snname.toLowerCase().includes(searchkey.toLowerCase())
        );
        this.setState({ order: result });
    }

    resetSearch = () => {
        this.setState({ searchKey: "" }, () => {
            this.retrievePosts();
        });
    };

    handlePrint = () => {
        const doc = new jsPDF();
        const table = document.getElementById("OrderTable");
        const tableRows = table.querySelectorAll("tr");

        // Add header
        doc.text("Suprime Wine Stores", 10, 10);
        doc.text("Address: Supreme Wine Stores, No10,Gamini Road, Galle", 10, 20);
        doc.text("Phone: 0915676543", 10, 30);
        doc.text("Email: supreme@gmail.com", 10, 40);
        doc.text("Order Detail List", 10, 60);

        // Add table
        doc.autoTable({
            html: "#OrderTable",
            startY: 70
        });


        doc.save("Order_Detail_Table.pdf");
    };


    render() {
        const totalQuantity = this.state.order.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = this.state.order.reduce((total, item) => total + item.quantity * item.unitprice, 0);


        return (


            <div className='mt-5'>
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                    </div>
                    <div className="add_btn mt-2 mb-2">
                       
                        <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
                        <a href="/OrderList"><button className='backBtn'> Order List</button></a>
                         <button onClick={this.handlePrint} className='backBtn'>Save </button>
                        <h2><b>Supreme Wine Stores</b></h2>
                        <p>Address: Supreme Wine Stores, No10,Gamini Road, Galle</p>
                        <p>Phone: 0915676543</p>
                        <p>Email: supreme@gmail.com</p>

                    </div>
                    <div className="row">
            <div className="col-sm-4">
              <div className="card1">
                <div className="card-body1">
                  <h5 className="card-title">Total Quantity</h5>
                  <p className="card-text">{totalQuantity}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card2">
              <div className="card-body2">
                <h5 className="card-title">Total Price</h5>
                <p className="card-text">LKR {totalPrice}</p>
              </div>
            </div>
            </div>
            </div>
                    <h3>Order Detail List</h3>

                    <div className="table-responsive">
                        <table class="table" id="OrderTable">
                            <thead>
                                <tr className="table-dark" >
                                    <th scope="col" ></th>
                                    <th scope="col" >Supplier Company Name</th>
                                    <th scope="col">Supplier Name</th>
                                    <th scope="col" >Date</th>
                                    <th scope="col" >Product Name</th>
                                    <th scope="col" >Quantity</th>
                                    <th scope="col" >Unit Price(LKR)</th>
                                    <th scope="col" >Total Price(LKR)</th>
                                    <th scope="col" >Status</th>
                                    <th scope="col" ></th>






                                </tr>
                            </thead>
                            <tbody> {
                                this.state.order.map((order, index) => (
                                    <tr key={index}>

                                        <th scope="row">
                                            {
                                                index + 1
                                            }</th>

                                        <td> {
                                            order.snname
                                        }</td>

                                        <td>{
                                            order.sname
                                        }</td>

                                        <td>{
                                            order.date.substring(0, 10)
                                        }</td>


                                        <td>{
                                            order.pname
                                        }</td>

                                        <td>{
                                            order.quantity
                                        }</td>

                                        <td>{
                                            order.unitprice
                                        }</td>

                                        <td>{
                                            order.quantity * order.unitprice
                                        }</td>
                                        <td>{
                                            order.status
                                        }</td>


                                    </tr>
                                ))
                            } </tbody>


                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default withParams(PrintPreviewOrder);