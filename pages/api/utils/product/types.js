import db from "models";
import { Sequelize } from "sequelize";

export default async function handler(req, res) {

    const { locketId } = req.query;
  const products = await db.Product.findAll({
    where: {
        locketId
    },
    order: [
      ['id', 'ASC'],
    ],
    include: [{
      model: db.File
    }, db.Color, db.Metal, db.Locket]
  });
  res.statusCode = 200;
  res.json({ products: products })
}
