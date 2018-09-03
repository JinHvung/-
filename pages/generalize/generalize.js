// pages/generalize/generalize.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: 'Hello World',
    condition: false,
    a: 1,
    b: 2,
    c: 3,
    length: 3,
    name: 'ZhouXJ',
    object: { key: 'Hello' },
    array: ['ZhouXJ'],
    zero: 0,
    array1: [{ message: 'foo' }, { message: 'bar' }],
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' },
    ],
    numberArray: [1, 2, 3, 4],
    items: {
      index: 0,
      msg: 'this is a template',
      time: '2018-4-19'
    },
    text: 'import 引用'

  },

  bindViewTap: function (event) {
    console.log(event)
    event.currentTarget.dataset.alphaBeta === 1 // - 会转为驼峰写法
    event.currentTarget.dataset.alphabeta === 2 // 大写会转为小写

  },

  handleTap1: function () {
    console.log("触发handleTap1")
  },

  handleTap2: function () {
    console.log("触发handleTap2")
  },

  handleTap3: function () {
    console.log("触发handleTap3")
  },

  tapName: function (event) {
    console.log("view 点击事件")
    console.log(event);
  },

  switch: function (e) {
    const length = this.data.numberArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp;
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  addToFront: function (e) {
    const length = this.data.objectArray.length
    console.log("length =  " + length)
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },

  addNumberToFront: function () {
    const length = this.data.numberArray.length
    this.data.numberArray = [length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },

  clickMe: function () {
    this.setData({ msg: "活动推广" })
  },

  /**
   * 获取用户位置
   */
  location: function () {

    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy

      }
    })
    this.setData({ latitude: "asdfedf" })
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