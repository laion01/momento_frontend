import axios from "axios"

class AuthApi {
  constructor() {
    this.URI = "/api/auth"
  }

  async login(credentials) {
    return credentials && (await axios.post(`${this.URI}/login`, credentials))
  }

  async me(token) {
    return token && (await axios.post(`${this.URI}/me`, {token}))
  }

  async signup(credentials) {
    return (
      credentials && (await axios.post(`${this.URI}/signup`, credentials))
    )
  }

  async setDetails(data) {
    return (
      data && (await axios.post(`${this.URI}/details`, data))
    )
  }

  async requireVerification(email, password) {
    return await axios.post(`${this.URI}/requireVerification`, {email, password})
  }

  async verifyAccount(token) {
    return await axios.post(`${this.URI}/verifyAccount`, {token})
  }

  async signout() {
    return await axios.post(`${this.URI}/signout`)
  }

  async requestPassowrd(email) {
    return await axios.post(`${this.URI}/password/request`, {
      email,
    })
  }

  async resetPassword(passwordsData) {
    return await axios.patch(`${this.URI}/password/confirm`, passwordsData)
  }
}

const AUTH_API =  new AuthApi()
export default AUTH_API;