import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    let u = await Backend.getAuthenticatedUser({req, res});
    if(!u) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
    }

    if (req.method === "PUT") {
        const order = await db.Order.findByPk(req.body.orderId)
        console.log(order)
        if(!(order.dataValues.userId == u.id || u.role == 3))
        {
            res.statusCode = 401
            return res.json({ error: "Unauthorized User" })
        }

        order.pid = req.body.pid;
        order.status = 1;
        await order.save();

        res.statusCode = 200;
        res.json({ order })
    }
  }