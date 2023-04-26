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

class OrderList extends Component {

    constructor(props) {
        super(props);

        this.status = "";

        this.state = {
            id: props.params.id,
            order: []
            
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



    render() {

        return (


            <div className='mt-5'>
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
                        <a href="/AddOrder"><button className='backBtn'>Add Order Detail</button></a>
                        <a href="/PrintPreviewOrder"><button className='backBtn'>Save as PDF</button></a>




                    </div>


                    <div className="table-responsive">
                        <table class="table" >
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
                                    <th scope="col" >Action</th>
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

                                        <td>
                                            <input type="text" class="form-control"
                                                value={
                                                    this.state.status
                                                }
                                                onChange={
                                                    this.handleChange
                                                }
                                                id="formGroupExampleInput"
                                                placeholder={
                                                    order.status
                                                } /></td>



                                        <td onClick={
                                            () => this.onDelete(order._id)
                                        }>
                                            <a className="btn btn-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </a>
                                        </td>

                                        <td onClick={
                                            () => this.onSave(order._id)
                                        }>
                                            <a className="btn btn-success">
                                                <i className="fas fa-edit"></i>
                                            </a>
                                        </td>


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

export default withParams(OrderList);