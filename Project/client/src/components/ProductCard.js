import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  return (
    // <div className="m-2">
    //   <MDBContainer>
    //     <MDBRow className="mb-3">
    //       {items.map((item) => (
    //         <MDBCol key={item.id} size="md">
    //           <MDBCard>
    //             <MDBCardImage src={item.img} position="top" alt="..." />
    //             <MDBCardBody>
    //               <MDBCardTitle>{item.title}</MDBCardTitle>
    //               <MDBCardText>{item.price}</MDBCardText>
    //               <MDBBtn onClick={() => dispatch(addToCart(item))}>
    //                 Add to Cart
    //               </MDBBtn>
    //             </MDBCardBody>
    //           </MDBCard>
    //         </MDBCol>
    //       ))}
    //     </MDBRow>
    //   </MDBContainer>
    // </div>

    // <div className="row">

    //   {items.map((item) => (
    //     <div className="col-md-4">
    //       <div style={{ margin: "60px" }} className="shadow p-3 mb-5 bg-white rounded">
    //         <img src={item.img} className="img-fluid" style={{ height: "200px", width: "200px" }} />
    //         <p>Rs.{item.price}</p>
    //         <p>{item.title}</p>

    //         <div className="flex-container">
    //           <div className="m-1 w-100">
    //             {/* call the addToCart function on click */}
    //             <button className="btn" onClick={() => dispatch(addToCart(item))}>
    //               ADD TO CART
    //             </button>
    //           </div>
    //         </div>



    //       </div>

    //     </div>

    //   ))}



    // </div>
    <div className="row">

    {items.map((item) => (
      <div className="col-md-4">
        <div style={{ margin: "60px" }} className="shadow p-3 mb-5 bg-white rounded">
          <img src={item.image} className="img-fluid" style={{ height: "200px", width: "200px" }} />
          <p>Rs.{item.price}</p>
          <p>{item.name}</p>

          <div className="flex-container">
            <div className="m-1 w-100">
              {/* call the addToCart function on click */}
              <button className="btn" onClick={() => dispatch(addToCart(item))}>
                ADD TO CART
              </button>
            </div>
          </div>



        </div>

      </div>

    ))}



  </div>
  )
}


