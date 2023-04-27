import cookie from "cookie"
import Database from "models"
import JwonWebToken from "jsonwebtoken"
import { JWT_SECRET } from "config"

class Backend {
  /**
   * @param  {NextApiContext} context
   * @returns {String}
   */
  getIpAddress(context) {
    return context.req.socket.remoteAddress
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
    return {...user, token}
  }

  /**
   * @param  {Object} token
   * @returns {Boolean}
   */
  hasAuthTokenExpired(token, time) {
    return Date.now() - new Date(token.createdAt).getTime() + time <= 0
  }

  requireVerification(context, token) {
    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("verifyToken", token, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 60 * 60,
        path: "/",
      })
    )
  }

  needVerification(context) {
    try{
      if(context.req.cookies.verifyToken)
        return true;
      return false;
    } catch(error) {
      return false;
    }
  }

  async verifyAccount(context, token, pin) {
    if(context.req.cookies.verifyToken) {
      if(context.req.cookies.verifyToken == token) {
        const r_token = await Database.EmailVerify.findOne({where: {token: context.req.cookies.verifyToken}});
        const r_pin = await Database.SmsVerify.findOne({where: {userId: r_token.userId}});
        if(r_token.token != token || r_pin.token != pin ) {
          return false;
        }
        if(this.hasAuthTokenExpired(r_token, 5 * 60)) return false;
        if(this.hasAuthTokenExpired(r_pin, 5 * 60)) return false;

        const user = await Database.Users.findByPk(r_token.userId)
        user.isVerified = true;
        user.save();
        await r_token.destroy();
        await r_pin.destroy();

      } else {
        return false;
      }
    } else {
      return true;
    }

    context.res.setHeader(
      "Set-Cookie",
      cookie.serialize("verifyToken", null, {
        httpOnly: true,
        secure: false,
        sameSite: "strict",
        maxAge: 0,
        path: "/",
      })
    )
    return true;
  }
}

export default new Backend()
