import axios from "axios"

class UtilsApi {
  constructor() {
    this.URI = "/api/utils"
  }

  async getChains() {
    try {
      const res = await axios.post(`${this.URI}/chains`)
      return res.data.chains
    } catch (e) {
      return { count: 0, rows: []}
    }
  }

  async addChain(chain) {
    try {
      const res = await axios.post(`${this.URI}/chain`, {chain})
      return { new: res.data.new, chains: res.data.chains.rows}
    } catch (e) {
      return { new: -1, chains: []}
    }
  }

  async updateChain(chain) {
    try {
      const res = await axios.put(`${this.URI}/chain`, {chain})
      console.log("+++++++++++++++++++", res.data)
      return res.data.chains.rows
    } catch (e) {
      return []
    }
  }


  async getTokens() {
    try {
      const res = await axios.post(`${this.URI}/tokens`)
      return res.data.tokens
    } catch (e) {
      return { count: 0, rows: []}
    }
  }

  async addToken(token) {
    try {
      const res = await axios.post(`${this.URI}/token`, token)
      return { new: res.data.new, tokens: res.data.tokens.rows}
    } catch (e) {
      return { new: -1, tokens: []}
    }
  }

  async updateToken(token) {
    try {
      const res = await axios.put(`${this.URI}/token`, token)
      console.log("+++++++++++++++++++", res.data)
      return res.data.tokens.rows
    } catch (e) {
      return []
    }
  }

  async getAddresses(tokenId) {
    try {
      const res = await axios.post(`${this.URI}/addresses`, {tokenId})
      return res.data.addresses.rows
    } catch (e) {
      return []
    }
  }
}

const UTILS_API =  new UtilsApi()
export default UTILS_API;