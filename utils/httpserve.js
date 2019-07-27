// 请求服务的js
// 序列化参数对象
import qs from "./qs.js";

export default {
  // 无参数的 get 请求
  getNoParams(url){
    return new Promise(resolve=>{
      wx.request({
        url: url,
        success(res) {
          resolve(res)
        }
      })
    })
  },

  // 有参数的 get 请求
  getHasParams(url,params,cb){
    wx.request({
      url: url,
      data: params,
      success(res) {
        cb(res)
      }
    })
  },

  // 无参数的 post 请求
  postNoParams(url, cb) {
    wx.request({
      url: url,
      method: "POST",
      success(res) {
        cb(res)
      }
    })
  },

  // 有参数的 post 请求
  postHasParams(url, params, cb) {
    wx.request({
      url: url,
      data: params,
      method: "POST",
      success(res) {
        cb(res)
      }
    })
  },

  // 提交为 form 的 post 请求
  postFormParams(url, params, cb) {
    params = {
      xyUserLite: params
    }
    wx.request({
      url: url,
      data: qs.stringify(params, { arrayFormat: 'repeat', allowDots: true, allowDots: true }),
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      method: "POST",
      success(res) {
        cb(res)
      }
    })
  }


}