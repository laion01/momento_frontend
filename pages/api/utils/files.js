import db from "models";

export default async function handler(req, res) {
  const products = await db.File.findAndCountAll({
    order: [
      ['id', 'ASC'],
    ],
  });
  res.statusCode = 200;
  res.json({ products: products })
}
