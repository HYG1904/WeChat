// pages/count/count.js
Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    countIndex: 0,
    tabs: ["蓝色","绿色","红色"],
    old: ["blue","green","red"],
    Arrays: [
      {
        list: ["#84A9FF", "#3366FF", "#102693", "#091A7A","#7A0C32" ]
      },
      {
        list: ["#D8FFF9", "#6FF2FF", "#2EB1DB", "#146193", "#0C467A"]
      },
      {
        list: ["#FFC6B2", "#FF3F3F", "#B71F3A", "#931435", "#7A0C32"]
      }
    ],

  },
  chengeCount(e) {
    console.log(e)
    var i = e.target.dataset.index;
    this.setData({
      currentIndex: i,
    })
  },
  chengeSwiper(e) {
   console.log(e)
   if(e.detail.source){
    this.setData({
      currentIndex: e.detail.current
    })
   }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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