// pages/bufan/bufan.js

const designs = require("../../utils/data.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    bigarr:[],
    currentIndex:0,
    mask:false,
    maskTitle:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(designs);
    let arr = designs.designs;
    var bigarr = [];
    var smallarr = [];
    for (var i = 0; i < arr.length; i++) {
      //  console.log(arr)
      smallarr.push(arr[i]);
      //判断arr的长度 够5个取出来
      if (smallarr.length === 5 || i === arr.length - 1) {
        bigarr.push(smallarr)
        smallarr = []
      }
    }
    // 回调
    this.setData({
      bigarr : bigarr
    })
  },
  //弹窗显示
  showMask(e){
    if(e.target.dataset.title === "ui"){
      this.setData({
        mask: true,
         maskTitle: "UI设计精品班",
        // isBlue: false
      })
    }else{
      this.setData({
        mask: true,
         maskTitle: "H5前端精品班",
        // isBlue: true
      })
    }
  },

  //关闭弹窗
  closeMask(){
    this.setData({
      mask: false
    })
  },
  //阻止冒泡
  maskContentTap(){
    return;
  },
  // 点击小点事件
  changeCount(e){
   this.setData({
    currentIndex: e.target.dataset.index
   })
  },
  // 滑动轮播改变小点
  changeIndex(e){
   if(e.detail.source){
    this.setData({
      currentIndex: e.detail.current
    })
   }
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