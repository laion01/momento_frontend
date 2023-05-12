import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
      let u = await Backend.getAuthenticatedUser({req, res});
      if(!u) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
      }

      if(u.id != req.body.userId) {
        res.statusCode = 401
        return res.json({ error: "Unauthorized User" })
      }

      const user = await db.User.findByPk(u.id)

      user.country = JSON.stringify(req.body.country);
      user.state = JSON.stringify(req.body.state);
      user.city = req.body.city;
      user.apartment = req.body.apartment;
      user.address = req.body.address;
      user.zipcode = req.body.zipcode;
      user.phone = req.body.phone;

      user.save();

      res.statusCode = 202
      res.json({
        loggedIn: true,
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone: user.phone,
        role: user.role,
        country: JSON.parse(user.country),
        state: JSON.parse(user.state),
        city: user.city,
        apartment: user.apartment,
        address: user.address,
        zipcode: user.zipcode,
        avatar: user.avatar,
        status: user.status,
        authToken: u.token
      })
    } else {
      res.json({ error: "method_not_allowed" })
    }
  }
  