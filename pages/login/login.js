// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  chooseImg: function () {
    wx.chooseImage({
      sourceType:['album','camera'],


      success: function(res) {
      },
    });

  },

  /**
   * 登陆按钮点击事件
   */
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var phone = e.detail.value.phone;
    var psw = e.detail.value.psw;
    console.log('form发生了submit事件，输入的电话号码为：', phone);
    console.log('form发生了submit事件，输入的密码为：', psw);

    // 显示加载框
    wx.showLoading({
      title: '登录中',
    });
    // 2秒后消失加载框  并跳转到首页
    setTimeout(function () {
      wx.hideLoading();
      wx.switchTab({
        url: '../index/index',
      });
    }, 2000);
  },

  /**
   * 忘记密码按钮点击事件
   */
  changePwd: function () {


    console.log(`这是
                 多行
                 字符串`);

    wx.navigateTo({
      url: '../change/change',
    });
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