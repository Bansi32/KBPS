const express = require("express");
const router = express.Router();
const path = require('path');
require("dotenv").config();
const shortid = require('shortid');
const Razorpay = require('razorpay');


const razorpay = new Razorpay({
    key_id:process.env.key_id,
    key_secret: process.env.key_secret,
});

router.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/5.jpg'));
});

router.get('/imagedonate', (req, res) => {
    res.sendFile(path.join(__dirname, '../images/donate.png')); 
});

router.post('/verification', (req, res) => {
	// do a validation
    const secret = process.env.JWT_SECRET;

    console.log(req.body);

    const crypto = require('crypto');

    const shasum = crypto.createHmac('sha256', secret);
    shasum.update(JSON.stringify(req.body));
    const digest = shasum.digest('hex');

    console.log(digest, req.headers['x-razorpay-signature']);

	if (digest === req.headers['x-razorpay-signature']) {
        console.log('request is legit');
		// process it
        require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4));
	} else {
		// pass it
	}
    res.json({ status: 'ok' });
})

router.post('/payment',async (req, res) => {
    const payment_capture = 1;
    const amount = 1000;
    
    const currency = 'INR';
    const options={
        amount:(amount*100).toString(), currency, receipt:shortid.generate(), payment_capture
    };
    try
    {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.status(201).json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
        
    }
    catch (e)
    {
        console.log(e);
        next(e);
    }
    
});

router.post('/donate',async (req, res) => {
    const payment_capture = 1;
    const amount = 100;
    const currency = 'INR';
    const options={
        amount:(amount*100).toString(), currency, receipt:shortid.generate(), payment_capture
    };
    try
    {
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.status(201).json({
            id: response.id,
            currency: response.currency,
            amount: response.amount
        });
        
    }
    catch (e)
    {
        console.log(e);
        next(e);
    }
    
});

module.exports = router;