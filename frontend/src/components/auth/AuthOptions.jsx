import React, { useContext,useState } from 'react';
import { useNavigate,NavLink} from 'react-router-dom';
import UserContext from "../../context/userContext";



function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
        script.src = src;
		script.onload = () => {
            resolve(true);
		}
		script.onerror = () => {
            resolve(false);
		}
        document.body.appendChild(script);
	})
}

const __DEV__ = document.domain === 'localhost';

function AuthOptions() {
    const [name, setName] = useState('Khushi');

	async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

		if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return
		}
        const data = await fetch('https://kbps4.herokuapp.com/donate', { method: 'POST' }).then((t) =>
            t.json()
		)
        console.log(data);

		const options = {
			key: process.env.REACT_APP_KEY_ID,
			amount: data.amount.toString(),
            currency: data.currency,
			order_id: data.id,
			name: 'Payment',
			description: 'Be a helping hand',
			image: 'https://kbps4.herokuapp.com/imagedonate',
            handler: function () {
                alert("Payment Done");
				//alert(response.razorpay_payment_id)
				//alert(response.razorpay_order_id)
				//alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'khushi@gmail.com',
				phone_number: '8585948594'
			}
		}
		const paymentObject = new window.Razorpay(options)
        paymentObject.open();
	}
    const { userData, setUserData } = useContext(UserContext);
    const history = useNavigate();

    const register = () => history("/register");
    const login = () => history("/login");
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "");
        history('/');
    };

    return (
        <nav className="auth-options">
            {userData.user ? (
                <> 
                <NavLink to='/explore'  style={{marginRight:"50rem", position:"relative",top:"0.2rem",color:"white", textDecoration:"none"}}>Explore</NavLink>
                <button className="btn btn-primary mr-2" onClick={displayRazorpay}>Donate</button>        
                <button className="btn btn-primary mr-2" onClick={logout}>Logout</button>
            </>
                    ) : (
                    <>      
                    <button className="btn btn-primary mr-2" onClick={displayRazorpay}>Donate</button>                 
                    <button className="btn btn-primary mr-2" onClick={register}>Sign Up</button>
                    <button className="btn btn-primary mr-2" onClick={login}>Login</button>         
                </>
            )}
        </nav>
    )
}

export default AuthOptions;