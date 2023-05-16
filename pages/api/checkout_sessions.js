const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const data = req.body.items;
      console.log(data);
      let line_items = [];
      data.map((item) => {
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
      })
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      
    return res.status(200).send(session.url);
      console.log(session.url)
      // res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}

// [
//   {
//     id: 1,
//     name: 'With You Always Photo Album',
//     type: 'Necklace',
//     locketId: 1,
//     metalId: 1,
//     colorId: 1,
//     price: 100,
//     image: {
//       id: 1,
//       pathname: '/images/products/1683913724094_1.png',
//       type: 'IMAGE',
//       productId: 1,
//       width: 300,
//       height: 300,
//       createdAt: '2023-05-12T17:48:44.153Z',
//       updatedAt: '2023-05-12T17:48:44.153Z'
//     },
//     quantity: 1
//   }
// ]
