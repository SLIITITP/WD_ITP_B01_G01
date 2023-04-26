import React, { Component } from 'react';
import axios from 'axios';
import { useParams, useLocation, Link } from "react-router-dom";

function withParams(Component) {
  return props => <Component params={useParams()} />
}

class inventoryDetail extends Component {

  constructor(props) {
    super(props);

    this.status = "";

    this.state = {
      id: props.params.id,
      inventory: [],
      searchkey: "",
    };

  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/addProduct/posts").then(res => {
      if (res.data.success) {
        this.setState({ inventory: res.data.existingPosts });
        console.log(this.state.inventory)
      }
    });
  }

  //search part
  filterData(posts, searchkey) {
    const result = posts.filter((post) =>
      post.name.toLowerCase().includes(searchkey.toLowerCase())
    );
    this.setState({ inventory: result });
  }

  handlesearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("/addProduct/posts").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchkey);
        this.setState({ searchkey: searchkey });
      }
    });
  };

  resetSearch = () => {
    this.setState({ searchkey: "" }, () => {
      this.retrievePosts();
    });
  };

  // edit
  handleChange = (e) => {
    const { name, value } = e.target;

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
      });
    }
  }

  render() {
    const { searchKey } = this.state;
    const filteredInventory = this.state.inventory.filter((inventory) =>
      inventory.name.toLowerCase().includes(this.state.searchkey.toLowerCase())
    );

    return (
      <div className='mt-5'>
        <div className="container">
          <h3>Inventory</h3>
          <div className="add_btn mt-2 mb-2">
            <a href="/adminDashboard"><button className='backBtn'>Back to Dashboard</button></a>
            <a href="/inventory"><button className='backBtn'>Product Summary</button></a>
            <a href="/addProduct"><button className='backBtn'>Add Product</button></a>
            <a href="/printPreviewInventory"><button className='backBtn'>Print Preview</button></a>
          </div>

          <form
          className="form-inline my-2 my-lg-9 ml-auto"
         
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchKey}
            onChange={this.handlesearchArea}
          />
          {/* <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="button"
            onClick={this.resetSearch}
          >
            Reset
          </button> */}
           {/* <button className="btn btn-outline-secondary">Search</button> */}
        </form>

           <div className="table-responsive">
           
                
          <table className="table" >
            <thead>
              <tr className="table-dark" >
                <th scope="col" >#</th>
                <th scope="col" >Product Name</th>
                <th scope="col" >Category</th>
                <th scope="col" >Price(LKR)</th>
                <th scope="col" >Quantity</th>
                <th scope="col" >Capacity(ml)</th>
                <th scope="col" >Material</th>
                <th scope="col" >Percentage(%)</th>
                <th scope="col" >Country</th>
                <th scope="col" >Action</th>
                <th scope="col" ></th>
              </tr>
            </thead>
            <tbody> {
              this.state.inventory.map((inventory, index) => (
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
                    inventory.capacity
                  }</td>

                  <td>{
                    inventory.material
                  }</td>

                  <td>{
                    inventory.percentage
                  }</td>
                  <td>{
                    inventory.country
                  }</td>



                  <td onClick={
                    () => this.onDelete(inventory._id)
                  }><a className="btn btn-danger"><i className="fas fa-trash-alt"></i></a>
                  </td>

                  <td>
                    <a href={`/editInventory/${inventory._id}`} className="btn btn-success">
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
   
export default withParams(inventoryDetail);

