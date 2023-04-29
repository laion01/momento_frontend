import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    const metals = await db.Metal.findAndCountAll({
      order: [
        ['id', 'ASC'],
      ],
    });
    res.statusCode = 200;
    res.json({ metals: metals })
  }
  