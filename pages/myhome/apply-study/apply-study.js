// pages/myhome/apply-study/apply-study.js
import api from "../../../utils/api.js";
import hs from "../../../utils/httpserve.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addrssCh: ['河南省', '商丘市', ' 睢阳区'],
    addrsscode: ['410000', '411400', '411403'],
    manID: '',
    menTel: '',
    count: null,
    index: null,
    address: "",
    dormLs: [],
    classLs: [],
    idNumber: '',
    agree: true,
    tel: "",
  },
  //获取原住地
  adrssChange(e) {
    this.setData({
      addrssCh: e.detail.value,
      addrsscode: e.detail.code,
    })
    console.log(e.detail.code)
  },
  //获取身份证号
  getNember(e) {
    console.log(e.detail.value)
    this.setData({
      idNumber: e.detail.value,

    })
  },
  //获取紧急联系人
  getTel(e) {
    console.log(e.detail.value)
    this.setData({
      menTel: e.detail.value
    })
  },
  //获取宿舍
  getDrom(e) {
    this.setData({
      count: e.detail.value
    })
  },
  //获取自选居住地
  getDormSelf(e) {
    this.setData({
      address: e.detail.value
    })
  },
  //获取班级
  getClass(e) {
    this.setData({
      //获取下标值
      index: e.detail.value
    })
  },
  //  是否选择同意协议
  changeAgree(e) {
    this.setData({
      agree: e.detail.value[0] ? true : false
    })
  },
  //提交入学数据
  submit() {
    // 二代身份证号码正则   6 表示 地市编码  8位 出生日期  2位 当地公安局编号 1 性别 单数男 1随机码[0-9 | x]身份校验码
    const idNumberReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    // 电话号码正则
    const phoneReg = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
    // if(!idNumberReg.test(this.data.idNumber)){
    //   wx.showToast({
    //     title: "请输入规范的身份证号",
    //     icon: "none",
    //     mask: true
    //   })
    //   return false
    // }
    // if(!phoneReg.test(this.data.tel)){
    //   wx.showToast({
    //     title: "请输入正确手机号",
    //     icon: "none",
    //     mask: true
    //   })
    //   return false
    // }
    let params = {
      id: wx.getStorageSync("uid", '5e7d46fe151c448b86a86f3155cf1abc'),
      city: this.data.addrsscode.join(" "),
      cityText: this.data.addrssCh.join(" "),
      manID: this.data.idNumber,
      tel2: this.data.menTel,
      classId: this.data.classLs[this.data.index].id
    }
    console.log(params)
    if (this.data.count === this.data.dormLs.length - 1) {
      params.address = this.data.adress;
    } else {
      params.dormId = this.data.dormLs[this.data.count].id;
    }
    hs.postFormParams(api.study, params, res => {
      if (res.data.code === "success") {
        wx.showToast({
          title: "提交成功",
          icon: "none",
          mask: true
        })
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/myhome/myhome',
          })
        }, 1600)
      }
    })
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {
    //获取班级列表
    let that = this
    console.log("options ===>", options);
    hs.getHasParams(api.classLs, { limit: 30 }, res => {
      let classLs = res.data.data.list;
      // classLs = classLs.filter(item => {
      //   return item.type == options.classType;
      // })
      // console.log("班级列表===>",classLs);
      that.setData({
        classLs: classLs
      })

    })
    // 获取宿舍列表
    hs.getHasParams(api.dormLs, { limit: 30 }, res => {
      let dormLs = res.data.data.list;
      // dormLs = dormLs.filter(item => {
      //   return item.type == options.classType;
      // })
      //宿舍列表是对象所以用push
      dormLs.push({
        name: "自选租住地"
      })
      console.log("宿舍列表===>", dormLs);
      that.setData({
        dormLs: dormLs
      })
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