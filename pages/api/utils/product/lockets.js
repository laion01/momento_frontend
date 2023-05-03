import db from "models";
import { Sequelize } from "sequelize";
export default async function handler(req, res) {
  const products = await db.Product.count({
    // order: [
    //   ['locketId', 'ASC'],
    // ],
    // include: [db.Locket],
    attributes: [
      // 'id', 
      'locketId',
      [Sequelize.fn('COUNT', Sequelize.col('id')), 'count']
    ],
    group: ['locketId',]
  });
  res.statusCode = 200;
  res.json({ products: products })
}
