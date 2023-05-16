const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
      let totalPrice = 0;
      const line_items = [];
      req.body.items.map((item) => {
        line_items.push({
          price_data: {
            currency: "USD",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price*100,
          },
          quantity: item.quantity,
        })
        totalPrice += item.price * 100 * item.quantity
        console.log("================== item Price: ", item.price)

      })

      console.log("==================Price: ", totalPrice)
      const paymentIntent = await stripe.paymentIntents.create({
        amount: totalPrice,
        currency: "USD"
      })

      res.statusCode = 200
      res.json({
        secret: paymentIntent.client_secret,
      })
    } else {
      res.json({ error: "method_not_allowed" })
    }
  }
  