import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    let u = await Backend.getAuthenticatedUser({req, res});
    if(!u) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
    }

    if (req.method === "PUT") {
        try {
            const order = await db.Order.findOne({
                where: { id: req.body.orderId },
                include: [
                    { model: db.Address, as: 'shippingAddress' },
                ]
            })
            console.log(order)
    
            const shipping = await Backend.sendShipping(req.body.orderId, order.totalPrice, order.shippingAddress);
            // console.log(shipping);
    
            if(!(order.dataValues.userId == u.id || u.role == 3))
            {
                res.statusCode = 401
                return res.json({ error: "Unauthorized User" })
            }
    
            order.pid = req.body.pid;
            order.status = 1;
            await order.save();

            order.shippingId = shipping.ShipmentResults.PackageResults.TrackingNumber;
    
            res.statusCode = 200;
            res.json({ order, shippingId: order.shippingId })
        } catch (e) {
            res.statusCode = 401
            return res.json({ error: "Unauthorized User" }) 
        }
    }
  }