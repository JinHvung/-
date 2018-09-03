// pages/change/change.js

var interval = null //倒计时函数

Page({


  /**
   * 页面的初始数据
   */
  data: {
    sendMsg: '发送验证码',
    date: '请选择日期',
    fun_id: 2,
    time: '发送验证码', //倒计时 currentTime:61 
    currentTime: 60,
    animationData: {}
  },

  // startAnim: function () {
  //   var animation = wx.createAnimation({
  //     duration: 1000,
  //     timingFunction: 'ease',
  //   })
  //   this.animation = animation;
  //   animation.width(150).height(150).step();
  //   this.setData({
  //     animationData: animation.export()

  //   });
  // },

 /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh:function() {
    wx.showToast({
      title: '刷新',
      icon:'loading',
    })
  },

  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
    console.log("准备");
    this.animation = wx.createAnimation({
      transformOrigin:"0% 0%"
    });
  },

  /**
   * 旋转
   */
  rotate: function () {
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.setData({
      animation: this.animation.export()
    });
  },

  /**
   * 缩放
   */
  scale: function () {
    this.animation.scaleX(Math.random() * 2).step();
    this.setData({
      animation: this.animation.export()
    });
  },
  /**
    * 移动
    */
  translate: function () {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step();
    this.setData({
      animation: this.animation.export()
    });
  },

  /**
   * 倾斜
   */
  skew: function () {
    this.animation.skewY(Math.random() * 90, Math.random() * 90).step();
    this.setData({
      animation: this.animation.export()
    });
  },

  onShow: function () {
  },

  /**
   * 确认修改密码按钮点击事件
   */
  formSubmit: function (e) {
    console.log("携带的参数为： ", e.detail.value);
    var phone = e.detail.value.phone;
    var code = e.detail.value.code;
    var pwd = e.detail.value.pwd;
    console.log("输入的电话号码为 ： " + phone);
    console.log("输入的验证码为： " + code);
    console.log("输入的新密码为： " + pwd);
  },

  getCode: function (options) {
    var that = this;
    var currentTime = that.data.currentTime;
    interval = setInterval(function () {
      currentTime--;
      that.setData({
        time: '发送验证码(' + currentTime + 's)'
      })
      console.log("时间 ： " + currentTime);

      if (currentTime <= 0) {
        clearInterval(interval)
        that.setData({
          time: '重新发送',
          currentTime: 60,
          disabled: false
        })
      }
    }, 1000)
  },

  /**
    * 短信验证码发送按钮事件
    */
  getVerificationCode() {
    this.getCode();
    wx.showLoading({
      title: '正在发送',
    });
    setTimeout(function () {
      wx.hideLoading();
      wx.showToast({
        title: '短信发送成功',
      })
    }, 2000);
    var that = this
    that.setData({
      disabled: true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log("听页面卸载");
    clearInterval(interval);
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