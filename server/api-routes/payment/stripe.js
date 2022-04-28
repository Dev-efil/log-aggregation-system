const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_KEY);

router.get('/test', async (req, res) => {
    try {
        const prices = await stripe.prices.list({
            active: true,
        });
        var getprice = prices.data;
        var arr = [];
        getprice.forEach(price => {
            arr.push(price.id);
        });
        res.status(200).send(arr);
    } catch (error) {
        return res.status(400).send({ Error: error });
    }
});


// Recurring Subscriptions Annualy - Payment With Card
router.post('/checkout', async (req, res) => {
    const { name, email, priceId, cardNumber, cardExpMonth, cardExpYear, cardCVC, country, postalCode } = req.body;
    if (!cardNumber || !cardExpMonth || !cardExpYear || !cardCVC) {
        res.status(400).send({
            Error: "Necessary Card Details are required for One Time Payment",
        });
    }

    try {
        const client = await stripe.customers.create(
            {
                name: name,
                email: email,
            }
        )
        const subscription = await stripe.checkout.sessions.create({
            mode: 'subscription',
            customer: client.id,
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            success_url: `${YOUR_DOMAIN}/success.html?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${YOUR_DOMAIN}/cancel.html`
        });

        if (subscription.status === 'succeeded') {
            res.status(200).send({ Success: subscription });
        } else {
            res.status(400).send({ Error: "Please try again later" });
        }
    } catch (error) {
        res.status(400).send({ Error: error });
    }
});


module.exports = router;