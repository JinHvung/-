//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    imgUrls: [
      '../index/img/img_home_1.png',
      '../index/img/img_home_2.png',
      '../index/img/img_home_3.png',
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
  },

  /**
   * 验机工具按钮点击事件
   */
  clickTool: function () {
    wx.showToast({
      title: '点击验机工具按钮',
    })
  },

  /**
   * 扫码回收按钮点击事件
   */
  clickScan: function () {
    wx.showToast({
      title: '点击扫码回收按钮',
    })
  },

  /**
   * 手动回收按钮点击事件
   */
  clickRecyle: function () {
    wx.showToast({
      title: '点击手动回收按钮',
    })
  },

  /**
   * 查看更多按钮点击事件
   */
  moreOrder: function () {
    wx.showToast({
      title: '查看更多订单',
    })
  },


  onLoad: function () {
    wx.showToast({
      title: '登录成功',
    });

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onShareAppMessage: function () {

  },
  onTabItemTap(item) {
    console.log("-------------" + item.index)
    console.log("-------------" + item.pagePath)
    console.log("-------------" + item.text)
  },
})
