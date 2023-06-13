// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faArrowLeftLong}from  "@fortawesome/free-solid-svg-icons";



// const Cart = () => {
//   const cart = useSelector(state=>state.cart)

//   return (
//     <div className='container'>
//       <h2>Shopping Cart</h2>
//       {cart.cartItems.length === 0 ?(
//         <div>
//           <p>Your cart is currently empty</p>
//           <div>
//             <Link to='/'><span><FontAwesomeIcon icon={faArrowLeftLong} /> Start Shopping</span></Link>
//           </div>
//         </div>
//       ): (<>
//       <div>
//         <h3>Product</h3>
//         <h3>Price</h3>
//         <h3>Quantity</h3>
//         <h3>Total</h3>
//       </div>
//       <div>
//         {cart.cartItems?.map(cartItem=>(
//           <div key={cartItem.id}>
//             <div className='product'>
//               <img src={cartItem.image} alt={cartItem.name} style={{width: '80px'}}/>
//               <div>
//                 <h3>{cartItem.name}</h3>
//                 <p>{cartItem.desc}</p>
//                 <button>Remove</button>
//               </div>
//             </div>

//             <div className='price'>
//               ${cartItem.price}
//             </div>

//             <div className='quantity'>
//               <button>-</button>
//               <div>{cartItem.cartQuantity}</div>
//               <button>+</button>
//             </div>

//             <div className='total'>
//               ${cartItem.price * cartItem.cartQuantity}
//             </div>

//           </div>
//         ))}
//       </div>

//       <div className='summary'>
//            <button>Clear Cart</button>
//            <div>
//             <div>
//               <span>subtotal</span>
//               <span>${cart.cartTotalAmount}</span>
//             </div>

//             <p>Taxes and shipping calculated at checkout</p>
//             <button>checkout</button>
//             <div>
//             <Link to='/'><span><FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shopping</span></Link>
//           </div>
//            </div>
//       </div>
//       </>)}

      
//     </div>
//   )
// }

// export default Cart




import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from 'react-bootstrap';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <Container>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your cart is currently empty</p>
          <div>
            <Link to='/'><span><FontAwesomeIcon icon={faArrowLeftLong} /> Start Shopping</span></Link>
          </div>
        </div>
      ) : (
        <>
          <Row>
            <Col>
              <h3>Product</h3>
            </Col>
            <Col>
              <h3>Price</h3>
            </Col>
            <Col>
              <h3>Quantity</h3>
            </Col>
            <Col>
              <h3>Total</h3>
            </Col>
          </Row>
          {cart.cartItems?.map(cartItem => (
            <Row key={cartItem.id} className='py-3' style={{borderTop: "1px solid #000000"}}>
              <Col>
                <div className='product' style={{display:"flex", gap:"10px", }}>
                  <img src={cartItem.image} alt={cartItem.name} style={{ width: '80px' }} />
                  <div>
                    <h3 style={{fontSize:'14px'}}>{cartItem.name}</h3>
                    <p>{cartItem.desc}</p>
                    <button>Remove</button>
                  </div>
                </div>
              </Col>
              <Col>
                <div className='price'>
                  ${cartItem.price}
                </div>
              </Col>
              <Col>
                <div className='quantity' style={{display:"flex", gap:"10px"}}>
                  <button>-</button>
                  <div>{cartItem.cartQuantity}</div>
                  <button>+</button>
                </div>
              </Col>
              <Col>
                <div className='total'>
                  ${cartItem.price * cartItem.cartQuantity}
                </div>
              </Col>
            </Row>
          ))}
          <Row className='py-5'>
            <Col>
              <button>Clear Cart</button>
            </Col>
            <Col>
              <div>
                <div>
                  <span>subtotal</span>
                  <span>${cart.cartTotalAmount}</span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button>checkout</button>
                <div>
                  <Link to='/'><span><FontAwesomeIcon icon={faArrowLeftLong} /> Continue Shopping</span></Link>
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Cart;
