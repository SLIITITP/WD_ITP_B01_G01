
import React, {Component} from 'react';
import axios from 'axios';
import {useParams, useLocation,Link} from "react-router-dom";
function withParams(Component) {
    return props => <Component params={
        useParams()
    }/>
}

class SupplierList extends Component {

    constructor(props) {
        super(props);

        this.status = "";

        this.state = {
            id: props.params.id,
            supplier: []
        };

    }

    componentDidMount() {
        this.retrievePosts();

    }

    retrievePosts() {
        axios.get("/AddSupplier/posts").then(res => {
            if (res.data.success) {
                this.setState({supplier: res.data.existingPosts});
                console.log(this.state.supplier)
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
    axios.delete(`/AddSupplier/post/${id}`).then((res) => {
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
                <a href="/AddSupplier"><button className='backBtn'>Add Supplier</button></a>
                </div>
                <div className="table-responsive">
                     <table class="table" >
                         <thead>
                            <tr className="table-dark" >
                            <th scope="col" >ID</th>
                                 <th scope="col" >Supplier Company Name</th>
                                <th scope="col">Supplier Name</th>
                                <th scope="col" >Address</th>
                                <th scope="col" >Email</th>
                                <th scope="col" >Website</th>
                                 <th scope="col" >Phone</th>
                                 <th scope="col" >Status</th>
                                 <th scope="col" ></th>
                                 <th scope="col" >Action</th>
                             </tr>
                         </thead>
                         <tbody> {
                            this.state.supplier.map((supplier, index) => (
                                <tr key={index}>

                                    <th scope="row">
                                        {
                                        index + 1
                                    }</th>

                                    <td> {
                                        supplier.snname
                                    }</td>

                                    <td>{
                                        supplier.sname
                                    }</td>

                                    <td>{
                                        supplier.address
                                    }</td>

                                    <td>{
                                        supplier.email
                                    }</td>

                                    <td>{
                                        supplier.website
                                    }</td>

                                    <td>{
                                        supplier.phone
                                    }</td>

                                    <td>{
                                        supplier.status
                                    }</td>



                                    <td onClick={
                                        () => this.onDelete(supplier._id)
                                    }>
                                        <a className="btn btn-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </a>
                                    </td>

                                    <td>
                                        <a href={`/EditSupplier/${supplier._id}`} className="btn btn-success">
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

export default withParams(SupplierList);