import db from "models";
import Backend from "backend"

export default async function handler(req, res) {
    if (req.method === "POST") {
      let user = await Backend.getAuthenticatedUser({req, res});
      let newUser = false;

      if(!user) {
        newUser = true;

        if (typeof req.body.email !== "string") {
          res.statusCode = 400
          return res.json({ error: "missing_email", message: "Incorrect credentials! 1" })
        } else if (typeof req.body.password !== "string") {
          res.statusCode = 400
          return res.json({ error: "missing_password", message: "Incorrect credentials! 2"})
        }
        user = await db.User.findOne({
          where: {
            email: req.body.email.trim(),
          },
        })
  
        if (!user) {
          res.statusCode = 401
          return res.json({ error: "invalid_credentials", message: "Incorrect credentials! 3" })
        } else if (!(await user.checkPassword(req.body.password))) {
          res.statusCode = 401
          return res.json({ error: "wrong_password" })
        }

      }
      
      if (!user.status) {
        res.statusCode = 401
        return res.json({ error: "not_verified", message: "You account is not inactive." })
      } 
  
      // const profile = await Database.Profiles.findByPk(
      //   user.id
      // )
      // const currencies = await Database.Balances.getUserBalances(user.id);
      // const chains = await Database.Chains.findAndCountAll();
      let token = "";
      console.log("___ 3 ")



      if(newUser) {
        token = await Backend.login({
          req, res
        }, {
          id: user.id, 
          email: user.email, 
          first_name: user.first_name, 
          laste_name: user.last_name,
          phone: user.phone,
          avatar: user.avatar,
          role: user.role,
          status: user.status,
        })
        console.log("_____________ token ", token)
        // SMS.sendSms('+12055885568', "New account loggined!");
      } else {
        token = user.token
      }

      user = await db.User.findByPk(user.id)
  
      res.statusCode = 200
      res.json({
        loggedIn: true,
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        avatar: user.avatar,
        phone: user.phone,
        country: user.country,
        state: user.state,
        city: user.city,
        apartment: user.apartment,
        address: user.address,
        zipcode: user.zipcode,
        role: user.role,
        status: user.status,
        authToken: token
      })
    } else {
      res.json({ error: "method_not_allowed" })
    }
  }
  