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
      const res = await axios.delete(`${this.URI}/product/productImage?id=${file.id}`)
      return { products: res.data.products.rows}
    } catch (e) {
      return { new: -1, products: []}
    }
  }

  async getLocketsGallery() {
    try {
      const res = await axios.post(`${this.URI}/product/lockets`)
      return res.data.products
    } catch (e) {
      return []
    }
  }

  async createOrder(data) {
    try {
      const res = await axios.post(`${this.URI}/order`, data)
      return res;
    } catch (e) {
      return {}
    }
  }

  async setPaymentId(orderId, pid) {
    try {
      const res = await axios.put(`${this.URI}/updatePaymentId`, {orderId, pid})
      return res;
    } catch (e) {
      return {}
    }
  }

  async getOrder(id) {
    try {
      const res = await axios.get(`${this.URI}/order?id=${id}`)
      return res.data.order;
    } catch (e) {
      return {}
    }
  }

  async getOrders(userId) {
    try {
      if(!userId) {
        const res = await axios.get(`${this.URI}/orders`)
        console.log("All orders", res.data.orders)
        return res.data.orders;
      } else {
        const res = await axios.get(`${this.URI}/orders?userId=${userId}`)
        return res.data.orders;
      }
    } catch (e) {
      return []
    }
  }

  async checkoutPayment(data) {
    try {
      const res = await axios.post(`/api/checkout_sessions`, {items: data})
      return {sucess: true, ...res.data};
    } catch (e) {
      return { success: false}
    }
  }

  async getPaymentIntent(data) {
    try {
      const res = await axios.post(`/api/checkout/getClientIntent`, {items: data})
      return {success: true, ...res.data};
    } catch (e) {
      return { success: false}
    }
  }

  async getEstimations(data) {
    try {
      const res = await axios.post(`${this.URI}/getEstimations`, {items: data})
      return {...res.data};
    } catch (e) {
      return { success: false}
    }
  }

  async requestUPS(data) {
    try {
      const res = await axios.post(`${this.URI}/requestShipping`, {items: data})
      return {...res.data};
    } catch (e) {
      return { success: false}
    }
  }

  async setOrderViewed(orderId) {
    try {
      const res = await axios.put(`${this.URI}/orderViewed`, { orderId })
      return {...res.data.orders};
    } catch (e) {
      return { success: false}
    }
  } 

  async getUnViewedOrders(orderId) {
    try {
      const res = await axios.get(`${this.URI}/orderViewed`, { orderId })
      return {...res.data.orders};
    } catch (e) {
      return { success: false}
    }
  } 
}

const UTILS_API =  new UtilsApi()
export default UTILS_API;