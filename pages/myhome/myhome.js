// pages/myhome/myhome.js
// const designs = require("../../utils/data.js");
import api from "../../utils/api";
import hs from "../../utils/httpserve";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: null,
    status: 0

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              //  console.log(res.userInfo)
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
    //微信登录
    wx.login({
      success(res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: 'http://59.110.138.169/admin/xy/lite/student/onLogin',
            data: {
              code: res.code
            },
            //登录成功后返回code id 登录id:'5e7d46fe151c448b86a86f3155cf1abc' 
            success(res) {
              console.log(res);
              wx.setStorageSync("uid", '5e7d46fe151c448b86a86f3155cf1abc');
              hs.getHasParams(api.status, { id: '5e7d46fe151c448b86a86f3155cf1abc' }, res => {
                console.log(res);
                console.log(hs)
                that.setData({
                  status: res.data.data.status
                })
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  //点击按钮获取用户信息
  bindGetUserInfo(e) {
    console.log(e.detail.userInfo)
    this.setData({
      userInfo: e.detail.userInfo
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})