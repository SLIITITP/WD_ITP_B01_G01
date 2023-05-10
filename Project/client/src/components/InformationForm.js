
import React, { Component } from "react";
import axios from 'axios';
import "./delivery.css"

export default class InformationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            details: [],
            name: '',
            address: '',
            email: '',
            message: '',
            town: '',
            phone: ''
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

        const { name, email, message, town, address, phone } = this.state;

        const data = {
            name: name,
            address: address,
            email: email,
            message: message,
            town: town,
            phone: phone

        }
        console.log(data);

        axios.post("/informationForm/post", data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                var id = res.data.success._id
                window.location.href = `/DisplayInfo/${id}`;

                this.setState(
                    {
                        name: "",
                        address: "",
                        email: "",
                        message: "",
                        town: "",
                        phone: ""
                    }
                )
            }
        })

    }





    render() {
        return (
            <div >
                <section id="about" class="about section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-12">
                                <div class="about-img">
                                    <img src="https://images.pexels.com/photos/1374552/pexels-photo-1374552.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="img-fluid" />
                                </div>
                            </div>
                            
                                
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-header py-3">
                                                <h5 className="mb-0">Summary</h5>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                                        Total Quantity
                                                        <span>5</span>
                                                    </li>

                                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                                        <div>
                                                            <strong>Total amount</strong>
                                                        </div>
                                                        <span>
                                                            <strong>67000</strong>
                                                        </span>
                                                    </li>
                                                </ul>

                                               
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                    </div>
                </section>




                






                <div class="head-title">
                    <h1>Please enter your details below</h1>
                </div>
                <div class="delivery-form">
                    <h2>Information Form</h2>
                    <form>

                        <p for="formGroupExampleInput" class="form-label">Name</p>
                        <input type="text" class="form-control" name="name" value={this.state.name}
                            onChange={this.handleChange} id="formGroupExampleInput" placeholder="Enter your name" />

                        <p for="exampleFormControlTextarea1" class="form-label">Address</p>
                        <textarea class="form-control" name="address" value={this.state.address}
                            onChange={this.handleChange} id="exampleFormControlTextarea1" placeholder="Enter your address" rows="3"></textarea>


                        <p for="formGroupExampleInput2" class="form-label">Email</p>
                        <input type="text" class="form-control" name="email" value={this.state.email}
                            onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Enter your email" />

                        <p for="formGroupExampleInput" class="form-label">phone</p>
                        <input type="text" class="form-control" name="phone" value={this.state.phone}
                            onChange={this.handleChange} id="formGroupExampleInput" placeholder="Enter your phone" />

                        <p for="formGroupExampleInput2" class="form-label">Town</p>
                        <input type="text" class="form-control" name="town" value={this.state.town}
                            onChange={this.handleChange} id="formGroupExampleInput2" placeholder="Enter your town" />


                        <p for="exampleFormControlTextarea1" class="form-label">Notes</p>
                        <textarea class="form-control" name="message" value={this.state.message}
                            onChange={this.handleChange} id="exampleFormControlTextarea1" placeholder="Enter your Notes" rows="3"></textarea>

                        <button className="btn btn-primary" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i> Submit</button><br />



                    </form>
                </div>



            </div>
        )
    }
}
