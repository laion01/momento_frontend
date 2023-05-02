import axios from "axios"

class UtilsApi {
  constructor() {
    this.URI = "/api/utils"
  }

  async getMetals() {
    try {
      const res = await axios.post(`${this.URI}/metals`)
      return res.data.metals
    } catch (e) {
      return { count: 0, rows: []}
    }
  }

  async addMetal(name) {
    try {
      const res = await axios.post(`${this.URI}/metal`, {name})
      return { new: res.data.new, metals: res.data.metals.rows}
    } catch (e) {
      return { new: -1, metals: []}
    }
  }

  async updateMetal(metal) {
    try {
      const res = await axios.put(`${this.URI}/metal`, {metal})
      return res.data.metals.rows
    } catch (e) {
      return []
    }
  }


  async getColors() {
    try {
      const res = await axios.post(`${this.URI}/colors`)
      return res.data.colors
    } catch (e) {
      return { count: 0, rows: []}
    }
  }

  async addColor(color) {
    try {
      const res = await axios.post(`${this.URI}/color`, {color})
      return { new: res.data.new, colors: res.data.colors.rows}
    } catch (e) {
      return { new: -1, colors: []}
    }
  }

  async updateColor(color) {
    try {
      const res = await axios.put(`${this.URI}/color`, {color})
      return res.data.colors.rows
    } catch (e) {
      return []
    }
  }

  async getLockets() {
    try {
      const res = await axios.post(`${this.URI}/lockets`)
      return res.data.lockets
    } catch (e) {
      return { count: 0, rows: []}
    }
  }

  async addLocket(locket) {
    try {
      const res = await axios.post(`${this.URI}/locket`, {locket})
      return { new: res.data.new, lockets: res.data.lockets.rows}
    } catch (e) {
      return { new: -1, lockets: []}
    }
  }

  async updateLocket(locket) {
    try {
      const res = await axios.put(`${this.URI}/locket`, {locket})
      return res.data.lockets.rows
    } catch (e) {
      return []
    }
  }

  async getProducts() {
    try {
      const res = await axios.post(`${this.URI}/product/products`)
      return res.data.products
    } catch (e) {
      return { count: 0, rows: []}
    }
  }

  async addProduct(product) {
    try {
      const res = await axios.post(`${this.URI}/product/product`, {product})
      return { new: res.data.new, products: res.data.products.rows, error: ''}
    } catch (e) {
      let message = "Failed";
      if(e.response) message = e.response.data.error;
      return { new: -1, products: [], error: message}
    }
  }

  async updateProduct(product) {
    try {
      const res = await axios.put(`${this.URI}/product/product`, {product})
      return res.data.products.rows
    } catch (e) {
      return []
    }
  }

  async addProductImage(file) {
    try {
      const res = await axios.post(`${this.URI}/product/productImage`, {file})
      return { products: res.data.products.rows, fileId: res.data.fileId}
    } catch (e) {
      return { new: -1, products: []}
    }
  }

  async getValidLockets(id) {
    try {
      const res = await axios.get(`${this.URI}/product/types?locketId=${id}`)
      return { products: res.data.products }
    } catch (e) {
      return { products: []}
    }
  }

  async removeProductImage(file) {
    try {
      const res = await axios.delete(`${this.URI}/product/productImage`, {file})
      return { products: res.data.products.rows}
    } catch (e) {
      return { new: -1, products: []}
    }
  }

  async getLocketsGallery() {
    try {
      const res = await axios.post(`${this.URI}/locketGallery`)
      return res.data.lockets.rows
    } catch (e) {
      return { count: 0, rows: []}
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