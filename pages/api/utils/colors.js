import db from "models";

export default async function handler(req, res) {
    const colors = await db.Color.findAndCountAll({
      order: [
        ['id', 'ASC'],
      ],
    });
    res.statusCode = 200;
    res.json({ colors: colors })
  }
  