// pages/interflow/interflow.js
Page({

  click: function () {
    this.setData({ msg: "交流按钮点击后显示的内容" })
  },

  gotoGrid: function () {
    wx.navigateTo({
      url: '../grid/grid',
    })
  },

  gotoFooter:function() {
    wx.navigateTo({
      url: '../footer/footer',
    })
  },

  gotoLoadMore:function() {
    wx.navigateTo({
      url: '../loadmore/loadmore',
    })

  },


  showMsg: function () {
    wx.showToast({
      title: '显示消息提示框',
      icon: 'success',
      duration: 3000,
      mask: false
    })
  },

  showState: function () {
    wx.showModal({
      title: '提示',
      content: '显示的内容',
      cancelText: '关闭',
      showCancel: true,
      cancelColor: '#666666',
      confirmText: 'OK',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '用户点击了确定',
            icon: 'none',
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '用户点击了取消',
            icon: 'none',
          })
        }
      }
    })
  },

  /**
   * 显示操作菜单
   */
  showMenu: function () {
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: '#333333',
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.showToast({
            title: '用户点击了拍照',
            icon: 'none',
          })
        } else if (res.tapIndex == 1) {
          wx.showToast({
            title: '用户点击的相册',
            icon: 'none',
          })
        }
      }
    })
  },

  /**
   * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
   */
  showLoad: function () {
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  /**
   * 设置导航条
   */
  setBarTitle: function () {
    // wx.setNavigationBarTitle({
    //   title: '当前页面',
    // })
    // wx.setTopBarText({
    //   text: 'Hello ZhouXJ',
    // })
    wx.showNavigationBarLoading()

    setTimeout(function () {
      wx.hideNavigationBarLoading()
    }, 2000)
  },

  /**
   * 设置TabBar
   */
  setTabBar: function () {
    // wx.setTabBarBadge({ // 为 tabBar 某一项的右上角添加文本
    //   index: 0,
    //   text: '1',
    // })
    // setTimeout(function () {
    //   wx.removeTabBarBadge({
    //     index: 0,
    //   })
    // }, 2000)

    // wx.setTabBarBadge({
    //   index: 1,
    //   text: '文本',
    // })

    // setTimeout(function(){
    //   wx.removeTabBarBadge({
    //     index: 1,
    //   }, 2500)
    // })

    // wx.showTabBarRedDot({
    //   index: 0,
    // })

    // setTimeout(function () {
    //   wx.hideTabBarRedDot({
    //     index: 0,
    //   })
    // }, 2000);

    // wx.showTabBarRedDot({
    //   index: 3,
    // })

    if (this.data.isShow) {
      wx.hideTabBar({
        animation: true,
      })
    } else {
      wx.showTabBar({
        animation: true,
      })
    }
    this.setData({
      isShow: !this.data.isShow
    })
  },

  /**
   * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面。
   */
  gotoNext: function () {
    wx.navigateTo({
      url: '../test/test?id=1',
    })
  },


  onTabItemTap(item) {
    console.log("++++++++++++" + item.index)
    console.log("++++++++++++" + item.pagePath)
    console.log("++++++++++++" + item.text)
  },


  /**
   * 调用微信扫一扫能力
   */
  onScan: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello MINA!',
    array: [1, 2, 3],
    isShow: true,

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