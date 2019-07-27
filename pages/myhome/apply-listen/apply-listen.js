// pages/myhome/apply-listen/apply-listen.js
const utils = require("../../../utils/util.js");
import api from "../../../utils/api.js";
import hs from "../../../utils/httpserve.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["高中","大专","本科","本科以上"],
    index: null,
    date: "2019-07-11",
    startDate: "",
    gender: "男",
    isJob: false 
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // let now = utils.formatTime();
    // this.setData({
    //   startDate: now,
    //   date: now
    // })
  },
  // 获取姓名
   getName(e){
     var i = "obj.age"
     this.setData({
       [i]: e.detail.value,
      })
      console.log(e.detail.value)
   },
  // 获取性别
  setGender(e){
     console.log(e.detail.value)
     this.setData({
      gender: e.detail.value?"男":"女"
    })
    //  if(e.detail.value){
    //    this.setData({
    //     gender:'0'
       
    //    })
    //  }else if(e.detail.value){
    //   this.setData({
    //     gender:'1'
      
    //   })
    //  } 
   
   },
  //获取学历
  getEducation(e){
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },
  // /是否参加工作
  changeJob(e){
    console.log(e)
   this.setData({
    isJob:e.detail.value
   })
  },
  //获取学习时间
  getDate(e){
  console.log(e.detail.value)
  this.setData({
     date:e.detail.value
   })
  },
  //提交数据
  // wx.setStorageSync("uid", '5e7d46fe151c448b86a86f3155cf1abc');
  submit(e){
    console.log(e.detail.value)
    let params =e.detail.value;
    params.id=wx.getStorageSync('uid');
    params.sex=params.set?0:1;
    console.log(params)
    hs.postFormParams(api.hold,params,res=>{
      console.log(res);
      if(res.data.code === "success"){
        wx.showToast({
          title: "提交成功",
          icon: "none",
          mask: true
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1500);
      }
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