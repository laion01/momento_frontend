import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    let u = await Backend.signout({req, res});
    res.statusCode = 200
    res.json({})
  }
  