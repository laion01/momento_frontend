import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    let u = await Backend.getAuthenticatedUser({req, res});
    if(!u || u.role!=3) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
    }

    if (req.method === "GET") {
        const orders = await db.Order.findAndCountAll({
            where: {
                adminViewed: 0
            },
            include: [
                { model: db.Address, as: 'shippingAddress' },
                db.User
            ]
        })

        res.statusCode = 200;
        res.json({ orders })
    } else if (req.method === "PUT") {
        try {
            const order = await db.Order.findByPk(req.body.orderId)
            order.adminViewed = 1;
            await order.save()

            const orders = await db.Order.findAndCountAll({
                where: {
                    adminViewed: 0
                },
                include: [
                    { model: db.Address, as: 'shippingAddress' },
                    db.User
                ]
            })

            res.statusCode = 200;
            res.json({ orders })
            
        } catch (e) {
            res.statusCode = 400;
            res.json({error: 'unable to add this chain'})
        }
    }
  }
  