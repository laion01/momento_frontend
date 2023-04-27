import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
      let u = await Backend.getAuthenticatedUser({req, res});
      if(!u) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
      }

      const user = await db.User.findByPk(u.id)

      res.statusCode = 200
      res.json({
        loggedIn: true,
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        avatar: user.avatar,
        role: user.role,
        status: user.status,
        phone: user.phone,
        authToken: u.token
      })
    } else {
      res.json({ error: "method_not_allowed" })
    }
  }
  