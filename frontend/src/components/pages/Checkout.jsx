import React from 'react';
import { useParams ,useNavigate} from "react-router-dom";
import './Checkout.css';
import Payment from '../Payments/Payment';

const Checkout = () => {
  const { pname,psname, price } = useParams();
  // const navigate = useNavigate();
  // const Payment = () => {
  //   var x = document.getElementById("cod").checked;

  //     if (x) {
  //         window.alert("Order Confirmed!...Thankyou for shopping!!")
  //         navigate('/explore');
  //     } else {
  //         navigate('/payment');
  //   }
  // }
  return (
      <div className="checkoutMain">
        <h1>Complete Transaction</h1>
        <div className="checkoutInner">

          <div className="checkoutLeft">
            <div className="shippingDetails">
              <form>
                <h3>Shipping Details</h3>
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" class="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div class="form-group">
                  <label for="country">Country</label>
                  <input type="text" class="form-control" id="country" placeholder="Enter country" />
                </div>
                <div class="form-group">
                  <label for="state">State</label>
                  <input type="text" class="form-control" id="state" placeholder="Enter state" />
                </div>
                <div class="form-group">
                  <label for="city">City</label>
                  <input type="text" class="form-control" id="city" placeholder="Enter city" />
                </div>
                <div class="form-group">
                  <label for="address">Address</label>
                  <input type="text" class="form-control" id="address" placeholder="Enter address" />
                </div>
                <div class="form-group">
                  <label for="postalCode">Zip/postal Code</label>
                  <input type="text" class="form-control" id="postalCode" placeholder="Enter postal code" />
                </div>
                <div class="form-group">
                  <label for="phone">Phone</label>
                  <input type="phone" class="form-control" id="phone" placeholder="Enter phone" />
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="Enter email" />
                </div>
            </form>
                <Payment/>
            
            </div>
          </div>
          <div className="checkoutRight">
            <div className="Summary">
              <h3>Item Summary</h3>
              <div className="ItemDetail">
                <img src="https://hptdc.in/wp-content/uploads/2019/06/chamba_rumaal.jpg" alt="img"/>
                <h5>Name of Item: {pname}</h5>
                <h5>Name of Seller: {psname}</h5>
                <h5>Product Count: 2 count</h5>
                <h5>Price: {price}</h5>
              </div>
            </div>
            <div className="paymentMethod">
              <h3>Payment Methods</h3>
              <h5>Please Select a payment method</h5>
              <input className="radiobutton" type="radio" id="cod" name="pay_method" value="COD" />
              <label className="radioLabel" for="cod">Cash On delivery</label>
              <input className="radiobutton" type="radio" id="other" name="pay_method" value="Other" />
              <label className="radioLabel" for="other">UPI/Card</label>
            </div>
        </div>
        </div>
        </div>
    )
    
}
export default Checkout;
