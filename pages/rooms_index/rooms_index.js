// pages/rooms_index/rooms_index.js
const app = getApp();
Page({

  /**
   * Page initial data
   */
   data: {
    rooms: [],
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this;
    const url = app.globalData.url
    // console.log("page loaded")
    wx.request({
      url: `${url}/api/v1/rooms`,
      method: 'GET',
      success(res) {
        // console.log(res)
        const rooms = res.data.rooms;
        // console.log("rooms:", rooms)
        page.setData({
          rooms: rooms
        });
        wx.hideToast();
      }
    });
  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },


  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})