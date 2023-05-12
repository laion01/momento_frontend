import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    let u = await Backend.getAuthenticatedUser({req, res});
    if(!u) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
    }

    if (req.query.userId == u.id || u.role == 3) {
        const orders = await db.Order.findAll({
            where: {
                userId: u.id,
            },
            order: [
                ['id', 'ASC'],
            ],
            include: [
                db.SoldProduct
            ]
        });
        res.statusCode = 200;
        res.json({ orders })
    } else if(u.role == 3){
        const orders = await db.Order.findAll({
            order: [
                ['id', 'ASC'],
            ],
            include: [
                db.SoldProduct
            ]
        });

        res.statusCode = 200;
        res.json({ orders })
    }

}
