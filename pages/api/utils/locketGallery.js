import db from "models";

export default async function handler(req, res) {
    const lockets = await db.Product.findAndCountAll();
    res.statusCode = 200;
    res.json({ lockets: lockets })
  }
  