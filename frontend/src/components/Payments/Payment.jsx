import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const __DEV__ = document.domain === 'localhost'

function Payment() {
	const navigate = useNavigate();
    const [name, setName] = useState('Bansi')

	async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

		const data = await fetch('https://kbps4.herokuapp.com/payment', { method: 'POST' }).then((t) =>
			t.json()
		)

		console.log(data)

		const options = {
			key: __DEV__ ? 'rzp_test_13xvVnEfV5HPoJ' : 'PRODUCTION_KEY',
			amount: data.amount.toString(),
            currency: data.currency,
			order_id: data.id,
			name: 'Payment',
			description: 'Please complete the payment',
			image: 'https://kbps4.herokuapp.com/image',
            handler: function () {
				alert("Payment Done");
				navigate('/explore');
				//alert(response.razorpay_payment_id)
				//alert(response.razorpay_order_id)
				//alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'bansi@gmail.com',
				phone:'9899999999'
			}
		}
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()
	}
    return (
        <div>
			<button onClick={displayRazorpay} style={{color:"white"}}>Pay</button>
        </div>
    )
}

export default Payment;