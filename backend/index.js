import cookie from "cookie"
import Database from "models"
import JwonWebToken from "jsonwebtoken"
import { JWT_SECRET } from "config"
import nodemailer from "nodemailer"
import axios from "axios"

class Backend {
  /**
   * @param  {NextApiContext} context
   * @returns {String}
   */
  getIpAddress(context) {
    return context.req.socket.remoteAddress
  }

  async sendPurchaseSMTP() {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "AKIAUQUGO6RLB7OW5AYG", // generated ethereal user
        pass: "BCL0xxOwUBnqXi0gGH2+6w/1376aP4fM07RQGPCxlu9v", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'info@momentolocket.com', // sender address
      to: "davidleiva4999@gmail.com, artistchi@yahoo.com, spider-dev@outlook.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<html><head> <title>Momento Locket </title> <style>.body{margin: 0; padding: 0; width: 100% !important; background-color: gray;}h1{text-align: center; color: #996D01;}td,p{color: #747067; margin: 0px;}.main-container{width: 100%; max-width: 800px; margin:2rem; border-radius: 0.5rem; overflow: hidden; background-color: white; box-shadow: 0px 5px 5px rgba(116, 112, 103, 0.8);}.card{display: flex; flex-direction: column; justify-content: center; align-items: flex-center; padding: 1.25rem; margin-bottom: 2.5rem; background: #FFFFFF; border-radius: 0.5rem; box-shadow: 0px 2px 2px rgba(116, 112, 103, 0.1);}.product-name p{font-family: 'Montserrat'; font-style: normal; font-weight: 700; font-size: 1rem; line-height: 1.6875rem; color: #747067;}table{border-spacing: 0px;}</style></head><body> <table> <tbody> <tr><td class="body"><table class="main-container"> <thead> <tr style=" background-color: white; height:6.5rem"> <td style="width: 2rem;"></td><td style="padding: 2rem 0rem; display:flex; justify-content: center; align-items: center;"> <table style="width: 100%;"> <tbody> <tr> <td style="text-align: right;"><img height="40" src="https://momento-frontend.netlify.app/_ipx/w_128,q_75/%2Fimages%2Fmomento-logo.png?url=%2Fimages%2Fmomento-logo.png&w=128&q=75" alt="Some alt" style="vertical-align: top; height: 2.5rem; padding-right: 0.5rem; border-right: 1px solid #747067;"/></td><td><img height="40" src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fgalatea-logo.png?url=%2Fimages%2Fgalatea-logo.png&w=256&q=75" alt="Some alt" style="vertical-align: top; height: 2.5rem; padding-left: 0.5rem;"/></td></tr></tbody> </table> </td><td style="width: 2rem;"></td></tr></thead> <tbody> <tr> <td style="width: 2rem; background-color: white;"></td><td style="padding: 2.5rem; border-radius: 0.5rem; background-color: #F5F5F5;"> <table> <tr> <td> <h1> Thank for your purchase! </h1> </td></tr><tr> <td style="padding-top: 1rem; padding-bottom: 1rem;"> <p style="text-align: center;">Hi <span style="font-weight: 700;">Customer</span>, we’re getting your order number <span style="font-weight: 700;">#156729347</span> ready for delivery. We’ll send a confirmation when your items ship.</p></td></tr><tr> <td class="card"> <p style="font-weight: 700; margin-bottom: 0.5rem; text-align: center;"> Your estimated delivery: June 23, 2021 </p><p style=" text-align: center;"> Deliver to: Customer Name, 0000 Address St, City, FL 33327 </p></td></tr><tr> <td> <h1> Order Summary </h1> </td></tr><tr> <td class="card"> <table style="width: 100%;"> <tbody> <tr> <td style="width: 9rem; height: 7.5rem; padding: 1rem 0rem;"> <img src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flockets%2Flocket2.png?url=%2Fimages%2Flockets%2Flocket2.png&w=256&q=75" alt="" style="width: 7.5rem; height:7.5rem;"/> </td><td style="vertical-align: top; padding: 1rem 0rem;"> <table style="width: 100%;"> <tr class="product-name"> <td style="width: 100%; display: flex; justify-content: space-between"> <p> Momento® Locket Pearl Flower </p><p> $300 </p></td></tr><tr> <td> Metal: Silver </td></tr><tr> <td> Color: Yellow </td></tr><tr> <td> Quantity: 1 </td></tr></table> </td></tr><tr style="background-color: #D4D4D4; min-height: 1px;"><td></td><td></td></tr><tr> <td style="width: 9rem; height: 7.5rem; padding: 1rem 0rem;"> <img src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flockets%2Flocket2.png?url=%2Fimages%2Flockets%2Flocket2.png&w=256&q=75" alt="" style="width: 7.5rem; height:7.5rem;"/> </td><td style="vertical-align: top; padding: 1rem 0rem;"> <table style="width: 100%;"> <tr class="product-name"> <td style="width: 100%; display: flex; justify-content: space-between"> <p> Momento® Locket Pearl Flower </p><p> $300 </p></td></tr><tr> <td> Metal: Silver </td></tr><tr> <td> Color: Yellow </td></tr><tr> <td> Quantity: 1 </td></tr></table> </td></tr><tr style="background-color: #D4D4D4; min-height: 1px;"><td></td><td></td></tr><tr> <td style="width: 9rem; height: 7.5rem; padding: 1rem 0rem;"> <img src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flockets%2Flocket2.png?url=%2Fimages%2Flockets%2Flocket2.png&w=256&q=75" alt="" style="width: 7.5rem; height:7.5rem;"/> </td><td style="vertical-align: top; padding: 1rem 0rem;"> <table style="width: 100%;"> <tr class="product-name"> <td style="width: 100%; display: flex; justify-content: space-between"> <p> Momento® Locket Pearl Flower </p><p> $300 </p></td></tr><tr> <td> Metal: Silver </td></tr><tr> <td> Color: Yellow </td></tr><tr> <td> Quantity: 1 </td></tr></table> </td></tr><tr style="background-color: #D4D4D4; min-height: 1px;"><td></td><td></td></tr><tr> <td style="padding: 0.5rem 0rem; vertical-align: top; padding-top:1.5rem;"> Subtotal </td><td style="vertical-align: top; text-align: right; padding: 0.5rem 0rem; padding-top:1.5rem; font-weight: 700;"> $100 </td></tr><tr> <td style="padding: 0.5rem 0rem; vertical-align: top;"> Shipping </td><td style="vertical-align: top; text-align: right; padding: 0.5rem 0rem; font-weight: 700;"> $100 </td></tr><tr> <td style="padding: 0.5rem 0rem; vertical-align: top;"> Promotion Applied </td><td style="vertical-align: top; text-align: right; padding: 0.5rem 0rem; font-weight: 700;"> $100 </td></tr><tr> <td style="padding: 0.5rem 0rem; vertical-align: top; padding-bottom:1.5rem;"> Estimated tax </td><td style="vertical-align: top; text-align: right; padding: 0.5rem 0rem; padding-bottom:1.5rem; font-weight: 700;"> $100 </td></tr><tr style="background-color: #D4D4D4; min-height: 1px;"><td></td><td></td></tr><tr style="font-size: 18px; font-weight: 700;"> <td style="padding: 0.5rem 0rem; vertical-align: top; padding-top:1.5rem;"> Total </td><td style="vertical-align: top; text-align: right; padding: 0.5rem 0rem; padding-top:1.5rem;"> $400 </td></tr></tbody> </table> </td></tr></table> </td><td style="width: 2rem; background-color: white;"></td></tr><tr style="height: 5rem; background-color: white;"> <td style="border-right: 1px solid white;"></td><td style="border-left: 1px solid white;"> <table style="width: 100%;"> <tbody> <tr><td style="padding: 0.5rem 0rem"> </td></tr><tr><td style="padding: 0.5rem 0rem; text-align: center;"> © Galatea Jewelry by Artist. 2021. </td></tr></tbody> </table> </td><td></td></tr></tbody> </table></td></tr></tbody> </table> </body></html>`
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  async sendShipmentSMTP() {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "AKIAUQUGO6RLB7OW5AYG", // generated ethereal user
        pass: "BCL0xxOwUBnqXi0gGH2+6w/1376aP4fM07RQGPCxlu9v", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'info@momentolocket.com', // sender address
      to: "davidleiva4999@gmail.com, artistchi@yahoo.com, spider-dev@outlook.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<html><head><title>Momento Locket</title><style>.body{margin:0;padding:0;width:100%!important;background-color:gray}h1{text-align:center;color:#996d01}p,td{color:#747067;margin:0}.main-container{width:100%;max-width:800px;margin:2rem;border-radius:.5rem;overflow:hidden;background-color:#fff;box-shadow:0 5px 5px rgba(116,112,103,.8)}.card{display:flex;flex-direction:column;justify-content:center;align-items:flex-center;padding:1.25rem;margin-bottom:2.5rem;background:#fff;border-radius:.5rem;box-shadow:0 2px 2px rgba(116,112,103,.1)}.product-name p{font-family:Montserrat;font-style:normal;font-weight:700;font-size:1rem;line-height:1.6875rem;color:#747067}table{border-spacing:0}</style></head><body><table><tbody><tr><td class="body"><table class="main-container"><thead><tr style="background-color:#fff;height:6.5rem"><td style="width:2rem"></td><td style="padding:2rem 0;display:flex;justify-content:center;align-items:center"><table style="width:100%"><tbody><tr><td style="text-align:right"><img height="40" src="https://momento-frontend.netlify.app/_ipx/w_128,q_75/%2Fimages%2Fmomento-logo.png?url=%2Fimages%2Fmomento-logo.png&w=128&q=75" alt="Some alt" style="vertical-align:top;height:2.5rem;padding-right:.5rem;border-right:1px solid #747067"></td><td><img height="40" src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fgalatea-logo.png?url=%2Fimages%2Fgalatea-logo.png&w=256&q=75" alt="Some alt" style="vertical-align:top;height:2.5rem;padding-left:.5rem"></td></tr></tbody></table></td><td style="width:2rem"></td></tr><tbody><tr><td style="width:2rem;background-color:#fff"></td><td style="padding:2.5rem;border-radius:.5rem;background-color:#f5f5f5"><table><tr><td><h1>Your order has shipped!</h1></td></tr><tr><td style="padding-top:1rem;padding-bottom:1rem;text-align:center"><p style="text-align:center">Hi<span style="font-weight:700">Customer</span>, we’re getting your order number<span style="font-weight:700">#156729347</span>ready for delivery. We’ll send a confirmation when your items ship.</p></td></tr><tr><td style="padding:1rem 0;text-align:center;height:8rem"><a target="_blank" href="https://ups.com" style="height:3rem;border-radius:1.5rem;background-color:#996d01;padding:1rem 1.5rem;color:#fff">Track Your Order</a></td></tr><tr><td class="card"><p style="font-weight:700;margin-bottom:.5rem;text-align:center">Your estimated delivery: June 23, 2021</p><p style="text-align:center">Deliver to: Customer Name, 0000 Address St, City, FL 33327</p></td></tr><tr><td><h1>Order Summary</h1></td></tr><tr><td class="card"><table style="width:100%"><tbody><tr><td style="width:9rem;height:7.5rem;padding:1rem 0"><img src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flockets%2Flocket2.png?url=%2Fimages%2Flockets%2Flocket2.png&w=256&q=75" alt="" style="width:7.5rem;height:7.5rem"></td><td style="vertical-align:top;padding:1rem 0"><table style="width:100%"><tr class="product-name"><td style="width:100%;display:flex;justify-content:space-between"><p>Momento® Locket Pearl Flower</p><p>$300</p></td></tr><tr><td>Metal: Silver</td></tr><tr><td>Color: Yellow</td></tr><tr><td>Quantity: 1</td></tr></table></td></tr><tr style="background-color:#d4d4d4;min-height:1px"><td></td><td></td></tr><tr><td style="width:9rem;height:7.5rem;padding:1rem 0"><img src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flockets%2Flocket2.png?url=%2Fimages%2Flockets%2Flocket2.png&w=256&q=75" alt="" style="width:7.5rem;height:7.5rem"></td><td style="vertical-align:top;padding:1rem 0"><table style="width:100%"><tr class="product-name"><td style="width:100%;display:flex;justify-content:space-between"><p>Momento® Locket Pearl Flower</p><p>$300</p></td></tr><tr><td>Metal: Silver</td></tr><tr><td>Color: Yellow</td></tr><tr><td>Quantity: 1</td></tr></table></td></tr><tr style="background-color:#d4d4d4;min-height:1px"><td></td><td></td></tr><tr><td style="width:9rem;height:7.5rem;padding:1rem 0"><img src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Flockets%2Flocket2.png?url=%2Fimages%2Flockets%2Flocket2.png&w=256&q=75" alt="" style="width:7.5rem;height:7.5rem"></td><td style="vertical-align:top;padding:1rem 0"><table style="width:100%"><tr class="product-name"><td style="width:100%;display:flex;justify-content:space-between"><p>Momento® Locket Pearl Flower</p><p>$300</p></td></tr><tr><td>Metal: Silver</td></tr><tr><td>Color: Yellow</td></tr><tr><td>Quantity: 1</td></tr></table></td></tr><tr style="background-color:#d4d4d4;min-height:1px"><td></td><td></td></tr><tr><td style="padding:.5rem 0;vertical-align:top;padding-top:1.5rem">Subtotal</td><td style="vertical-align:top;text-align:right;padding:.5rem 0;padding-top:1.5rem;font-weight:700">$100</td></tr><tr><td style="padding:.5rem 0;vertical-align:top">Shipping</td><td style="vertical-align:top;text-align:right;padding:.5rem 0;font-weight:700">$100</td></tr><tr><td style="padding:.5rem 0;vertical-align:top">Promotion Applied</td><td style="vertical-align:top;text-align:right;padding:.5rem 0;font-weight:700">$100</td></tr><tr><td style="padding:.5rem 0;vertical-align:top;padding-bottom:1.5rem">Estimated tax</td><td style="vertical-align:top;text-align:right;padding:.5rem 0;padding-bottom:1.5rem;font-weight:700">$100</td></tr><tr style="background-color:#d4d4d4;min-height:1px"><td></td><td></td></tr><tr style="font-size:18px;font-weight:700"><td style="padding:.5rem 0;vertical-align:top;padding-top:1.5rem">Total</td><td style="vertical-align:top;text-align:right;padding:.5rem 0;padding-top:1.5rem">$400</td></tr></tbody></table></td></tr></table></td><td style="width:2rem;background-color:#fff"></td></tr><tr style="height:5rem;background-color:#fff"><td style="border-right:1px solid #fff"></td><td style="border-left:1px solid #fff"><table style="width:100%"><tbody><tr><td style="padding:.5rem 0"></td></tr><tr><td style="padding:.5rem 0;text-align:center">© Galatea Jewelry by Artist. 2021.</td></tr></tbody></table></td><td></td></tr></tbody></table></body></html>`
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  async sendEmailVerificatioinSMTP(to_email, code) {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "email-smtp.us-east-1.amazonaws.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "AKIAUQUGO6RLB7OW5AYG", // generated ethereal user
        pass: "BCL0xxOwUBnqXi0gGH2+6w/1376aP4fM07RQGPCxlu9v", // generated ethereal password
      },
    });

    let str = "" + code;
    let spacedStr = str.split('').join(' ');
    console.log(spacedStr);  // Output: "H e l l o W o r l d"

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'info@momentolocket.com', // sender address
      to: to_email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `<html><head><title>Momento Locket</title><style>.body{margin:0;padding:0;width:100%!important;background-color:gray}h1{text-align:center;color:#996d01}p,td{color:#747067;margin:0}.main-container{width:100%;max-width:800px;margin:2rem;border-radius:.5rem;overflow:hidden;background-color:#fff;box-shadow:0 5px 5px rgba(116,112,103,.8)}.card{display:flex;flex-direction:column;justify-content:center;align-items:flex-center;padding:1.25rem;margin-bottom:2.5rem;background:#fff;border-radius:.5rem;box-shadow:0 2px 2px rgba(116,112,103,.1)}.product-name p{font-family:Montserrat;font-style:normal;font-weight:700;font-size:1rem;line-height:1.6875rem;color:#747067}table{border-spacing:0}</style></head><body><table><tbody><tr><td class="body"><table class="main-container"><thead><tr style="background-color:#fff;height:6.5rem"><td style="width:2rem"></td><td style="padding:2rem 0;text-align:center"><img height="40" src="https://momento-frontend.netlify.app/_ipx/w_256,q_75/%2Fimages%2Fgalatea-logo.png?url=%2Fimages%2Fgalatea-logo.png&w=256&q=75" alt="Some alt" style="vertical-align:top;height:2.5rem"><td style="width:2rem"></td></tr></thead><tbody><tr><td style="width:2rem;background-color:#fff"></td><td style="padding:2.5rem;border-radius:.5rem;background-color:#f5f5f5"><table><tr><td><p>Hi<span style="font-weight:700">David</span>,<br><br>We received a request to reset the password of your account [email]. Your Galatea verification code is:</p></td></tr><tr><td style="padding-top:1rem;padding-bottom:1rem;text-align:center;color:#996d01;font-size:2.5rem;line-height:3.5rem">${spacedStr}</td></tr><tr><td>If you did not request this code, it is possible that someone else is trying to access your account. Please , do not share this code to anyone.</td></tr></table></td><td style="width:2rem;background-color:#fff"></td></tr><tr style="height:5rem;background-color:#fff"><td style="border-right:1px solid #fff"></td><td style="border-left:1px solid #fff"><table style="width:100%"><tbody><tr><td style="padding:.5rem 0"></td></tr><tr><td style="padding:.5rem 0;text-align:center">© Galatea Jewelry by Artist. 2021.</td></tr></tbody></table></td><td></td></tr></tbody></table></td></tr></tbody></table></body></html>`
    });
  }
  /**
   * @param  {NextApiContext} context
   * @param  {String} token
   */
  async login(context, data) {
    const token = JwonWebToken.sign(data, JWT_SECRET)
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("authToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      })
    )
    return token;
  }

  /**
   * @param  {NextApiContext} context
   * @returns {Object}
   */
  async signout(context) {
    const token = context.req.cookies.authToken;
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("authToken", null, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      })
    )
  }

  /**
   * @param  {NextApiContext} context
   * @returns {Object} user
   */
  async getAuthenticatedUser(context) {
    if (!context.req.cookies.authToken) return null
    const token = context.req.cookies.authToken;
    if (!token) return null

    const user = JwonWebToken.verify(token, JWT_SECRET)

    if (!user) {
      context.res.setHeader(
        "Set-Cookie",
        cookie.serialize("authToken", null, {
          httpOnly: true,
          secure: false,
          sameSite: "strict",
          maxAge: 0,
          path: "/",
        })
      )
      await token.destroy()
      return null
    }
    return { ...user, token }
  }

  /**
   * @param  {Object} token
   * @returns {Boolean}
   */
  hasAuthTokenExpired(token, time) {
    return Date.now() - new Date(token.createdAt).getTime() + time <= 0
  }

  async createVerificationCode(context, emailAddress) {
    var token = Math.floor(1000 + Math.random() * 9000);
    await this.sendEmailVerificatioinSMTP(emailAddress, token);

    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("verifyToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60,
        path: "/auth/verify",
      })
    )
  }

  needVerification(context) {
    try {
      if (context.req.cookies.verifyToken)
        return true;
      return false;
    } catch (error) {
      return false;
    }
  }

  verifyAccount(context, token) {
    console.log(context.req.cookies.verifyToken, token);
    if (context.req.cookies.verifyToken) {
      if (context.req.cookies.verifyToken == token) {

        context.res.setHeader(
          "Set-Cookie",
          cookie.serialize("verifyToken", null, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 0,
            path: "/auth/verify",
          })
        )
      } else {
        return false;
      }
    } else {
      return false;
    }

    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("verifyToken", null, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 0,
        path: "/auth/verify",
      })
    )
    return true;
  }

  async sendShipping(orderId, totalPrice) {
    let data = JSON.stringify({
      "ShipmentRequest": {
        "Shipment": {
          "Description": "Locket sold.",
          "Shipper": {
            "Name": "Galatea jewelry Corp",
            "CompanyDisplayableName": "",
            "AttentionName": "Chi Galatea",
            "Phone": {
              "Number": "9095920877",
              "Extension": "1"
            },
            "ShipperNumber": "68212A",
            "Address": {
              "AddressLine": "247 w Bonita Ave",
              "City": "San Dimas",
              "StateProvinceCode": "CA",
              "PostalCode": "91773",
              "CountryCode": "US"
            }
          },
          "ShipTo": {
            "Name": "David Leiva",
            "AttentionName": "David",
            "Phone": {
              "Number": "2055885568",
              "Extension": "1"
            },
            "Address": {
              "AddressLine": "351 markham street",
              "City": "Toronto",
              "StateProvinceCode": "ON",
              "PostalCode": "m6g2k8",
              "CountryCode": "CA"
            }
          },
          "ShipFrom": {
            "Name": "IMSD",
            "AttentionName": "ISMD",
            "Phone": {
              "Number": "9095920877",
              "Extension": "1"
            },
            "Address": {
              "AddressLine": "27 w Bonita Ave",
              "City": "San Dimas",
              "StateProvinceCode": "CA",
              "PostalCode": "91773",
              "CountryCode": "US"
            }
          },
          "PaymentInformation": {
            "ShipmentCharge": {
              "Type": "01",
              "BillShipper": {
                "AccountNumber": "68212A"
              }
            }
          },
          "InvoiceLineTotal": {
            "CurrencyCode": "USD",
            "MonetaryValue": "" + totalPrice
          },
          "Service": {
            "Code": "65",
            "Description": "Ground"
          },
          "ReturnService": {
            "Code": "9"
          },
          "Package": {
            "Description": "Return Item",
            "Packaging": {
              "Code": "02",
              "Description": "Simple package"
            },
            "PackageWeight": {
              "UnitOfMeasurement": {
                "Code": "LBS"
              },
              "Weight": "1"
            },
            "ReferenceNumber": [
              {
                "Code": "OD",
                "Value": "" + orderId
              },
            ]
          }
        },
        "LabelSpecification": {
          "LabelImageFormat": {
            "Code": "GIF",
            "Description": "GIF"
          }
        }
      }
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://wwwcie.ups.com/ship/v1/shipments',
      headers: { 
        'AccessLicenseNumber': process.env.UPS_ACCESS_KEY, 
        'Username': process.env.UPS_USERNAME, 
        'Password': process.env.UPS_PASSWORD, 
        'Accept': 'application/json', 
        'Content-Type': 'application/json', 
        'Cookie': '_abck=9C501883AD875E6C35DAAAB455C214BE~-1~YAAQHcMvFy9+DhqIAQAAaVGTKQlmxbKWoWe+KPFc5iBOCiRpDjxijx0koDG9Gr6Q3wRgBvoQQNLgb2T3YiE11VMiFa8sbLiwNLlBt5+CnWWU/Vx1pwJ3TIYHq2YHJBK5iCG2POQHq4fe56Hc++0wWznwSiGUhItlulg63uG2AIWhd0zbSOZp1Ik4m6PSNJZhq/z6BzZ7Yp0uICBjIlmH9f8a/qfKilBwl8MDGhM8ZrOYUtJk/JJsi6ozu7Ofb8q/ENW+Y6M1eu4QFLX2JTfKL7ElYvOYZ65akojkIE6t6h1G4ePpGlF5h5pw1OT9rtvWIEGQTqn/TCSQHZnFrZ43KcolYL83iqtKMYPzxDG7qT1YLKj5cGiTbNZakV5RpfaBgn4bfQ==~-1~-1~1684304441; ak_bmsc=182F12FF31DF6733897746D740E80006~000000000000000000000000000000~YAAQHkcjFyv1/UmIAQAAvLogTBMw5rw2rj+BZZT6moLmbxw5N37C+26Z/jGme5Rcr4wD7Mx66nVkAAx6uXkMnTyRNilOM6dIjxzhuIdrVOnMBsh+ju+EapEXjLOQM+FbjRq53uaO2bG31qQOUISXnhgvBRzunqqaaK179uxwKNB4Q81xzpRwSIubzR4nRnxFu4IhPAy3mLnFKR9horoQdC7LNZj1Hff7wlK01K9csQ+fx22SWQSIShUVcxRbCcdhQpyxnFKfjqICwYzHkViRiAyuMppkxuBU4IYAfdTuyUFXiHSZ3HLnCRDLvIsoDeLlN5TWDHF+Qwwn7kpSXxb7uXedEKNfpKkenV36KMfpzcF7m9y/jYZAMOA=; bm_sv=FCE57B3632736515FCDDE65DDB1EB971~YAAQ1EMkF0K0Ci+IAQAAkd9aTBP6F6hBMqAsWGilxuFSlG6BDRTUMceH676LNQOjA1GqdOqRKmfKeNewsOzScedjjSyIaKYuvf+ITVqLPr1Iv8iXC0HU08OmMyAYOGMt+4WymZtLHCyziHWbT56sXl726mPlnh5E/0u/DFBZVLcl7s8kKyd9WsVi6MGGpEnZ4vqSMA/tpg5lzVzjmue576mgPnvuUEum9YIruIIfqLii0R53yD6V8Z0BYMl94Q==~1; ups_language_preference=en_US'
      },
      data : data
    };
    return axios.request(config)
    .then((response) => {
      return(response.data);
    })
    .catch((error) => {
      return {}
    });
  }
}

export default new Backend()
