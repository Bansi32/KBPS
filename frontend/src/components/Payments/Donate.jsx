import React,{useState} from 'react';
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

function Donate() {
	const navigate = useNavigate();

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
			key: __DEV__ ? 'rzp_test_13xvVnEfV5HPoJ' : 'PRODUCTION_KEY',
			amount: data.amount.toString(),
            currency: data.currency,
			order_id: data.id,
			name: 'Payment',
			description: 'Be a helping hand',
			image: 'https://kbps4.herokuapp.com/imagedonate',
            handler: function () {
				alert("Payment Done");
				navigate('/');
				//alert(response.razorpay_payment_id)
				//alert(response.razorpay_order_id)
				//alert(response.razorpay_signature)
			},
			prefill: {
				name,
				email: 'bansi@gmail.com',
				phone: '8585948594'
			}
		}
		const paymentObject = new window.Razorpay(options)
        paymentObject.open();
	}
    return (
        <div>
            <button onClick={displayRazorpay}>Donate</button>
        </div>
    )
}

export default Donate;