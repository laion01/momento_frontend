import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.query.orderId) {
        const orders = await db.Order.findAndCountAll({
            order: [
                ['id', 'ASC'],
            ],
            include: [
                db.SoldProduct
            ]
        });
        res.statusCode = 200;
        res.json({ orders: orders })
    } else {
        const orders = await db.Order.findAndCountAll({
            order: [
                ['id', 'ASC'],
            ],
            include: [
                {model: db.SoldProduct, include: [db.Product]}
            ]
        });

        const sold = await db.SoldProduct.findAndCountAll({
            order: [
                ['id', 'ASC'],
            ],
        });
        res.statusCode = 200;
        res.json({ orders, sold })
    }

}
