import db from "models";

export default async function handler(req, res) {
    const lockets = await db.Locket.findAndCountAll({
      order: [
        ['id', 'ASC'],
      ],
    });
    res.statusCode = 200;
    res.json({ lockets: lockets })
  }
  