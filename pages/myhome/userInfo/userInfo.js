// pages/myhome/userInfo/userInfo.js
import hs from "../../../utils/httpserve.js";
import api from "../../../utils/api.js";


Page({
  /**
   * 页面的初始数据
   */
  data: {
    usermsg: null,
    education: ["高中", "大专", "本科", "本科以上"],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取用户信息
    var that = this;
    // res ==> response  响应   receive 接收
    hs.getHasParams(api.detail, { id: wx.getStorageSync("uid") }, receive => {
      // console.log(receive)
      that.setData({
        usermsg: receive.data.data
      })
    })
    //申请状态改变
    // hs.getHasParams(api.status, { id: '5e7d46fe151c448b86a86f3155cf1abc' }, res => {
    //   console.log(res);
    //   console.log(hs)
    //   that.setData({
    //     status: res.data.data.status
    //   })

    // })
    hs.getHasParams(api.pay, { userId: wx.getStorageSync("uid") }, receive => {
      console.log(receive);
    })

  },
  // 跳转到入学申请页
  jumpTo() {
    wx.navigateTo({
      url: '../apply-study/apply-study?gender=' + this.data.usermsg.sex + '&classType=' + this.data.usermsg.classId
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
    // 获取用户信息
    var that = this;
    // res ==> response  响应   receive 接收
    hs.getHasParams(api.detail, { id: wx.getStorageSync("uid") }, receive => {
      // console.log(receive)
      that.setData({
        usermsg: receive.data.data
      })
      // wx.stopPullDownRefresh可以停止当前页面的下拉刷新
      wx.stopPullDownRefresh();
    })
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