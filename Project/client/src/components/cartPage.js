import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation } from "react-router-dom";

function withParams(Component) {
    return props => <Component params={useParams()} />
}

class cartPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.params.id,
            cart: [],
            subtotal: 0,
            tax: 0.05, // 5% tax
            shipping: 15,
            quantity: 0,
        };
    }

    componentDidMount() {
        this.retrievePosts();
    }

    retrievePosts() {
        axios.get("/spirits/posts/c").then(res => {
          if (res.data.success) {
            const cart = res.data.existingPosts.map(item => ({
              ...item,
              quantity: item.quantity || 1, // set default quantity to 1 if not provided
            }));
            const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
            
            this.setState({
              cart,
              subtotal,
            }, () => {
              // after the state is updated, set the quantity state for each item in cart
              this.state.cart.forEach((item) => {
                this.setState({
                  quantity: item.quantity
                })
              });
            });
          }
        });
      }
      

    //update
    onSave = (id) => {
        let data = this.state.cart.filter((cart) => cart._id === id)[0];
        data.quantity = this.state.quantity;

        axios.put(`/spirits/post/c/${id}`, data).then((res) => {
            if (res.data.success) {
                console.log(res.data.success._id);
                alert("Updated Successfully");

                this.setState({
                    quantity: ""
                })
            }
        })
    }

    //delete
    onDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this?")) {
            axios.delete(`spirits/post/c/${id}`).then((res) => {
                alert("Delete Successfully");
                this.retrievePosts();
            }).catch(err => {
                console.log(err);
            });
        }
    };

    handleChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }



    render() {
        const { subtotal, tax, shipping,quantity } = this.state;
        const total = subtotal + (subtotal * tax);

        return (
            <div className="wrapper">
                <h1>Shopping Cart</h1>
                <div className="project">
                    <div className="shop">
                        {this.state.cart.map((cart, index) => (
                            <div className="box" key={cart._id}>
                                <img src={cart.image} alt={cart.name} />
                                <div className="content">
                                    <p><b>Name: </b>{cart.name}</p>
                                    <p><b>Price: </b>{cart.price}</p>
                                    <p className="unit"><b>Quantity: </b>
                                        <input type="number" className="form-control"
                                            value={this.state.quantity}
                                            onChange={this.handleChange}
                                            placeholder={cart.quantity}
                                        />
                                    </p>
                                    <button className="btn-cart-del" type="submit" style={{ marginTop: '15px' }} onClick={() => this.onDelete(cart._id)}>
                                        <i className="fas fa-trash-alt"></i> Delete
                                    </button>
                                    <br />
                                    <button className="btn-cart-del" type="submit" style={{ marginTop: '15px' }} onClick={() => this.onSave(cart._id)}>
                                        <i className="fas fa-trash-alt"></i> Update
                                    </button>
                                    <br />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="right-bar">
                        <p><span>Subtotal</span> <span>LKR {subtotal.toFixed(2)}</span></p>
                        <hr />
                        <p><span>Tax ({tax * 100}%)</span> <span>LKR {(subtotal * tax).toFixed(2)}</span></p>
                        <hr />
                        <p><span>Total</span> <span>LKR {total.toFixed(2)}</span></p>
                        <a href="/informationForm"><i class="fa fa-shopping-cart"></i>Checkout</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default withParams(cartPage);