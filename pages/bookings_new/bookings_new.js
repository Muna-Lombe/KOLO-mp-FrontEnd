// pages/bookings_new/bookings_new.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false
  },

  openModal: function() {
    this.setData({
      showModal: true,
    })
    
  },

    hideModal: function() {
      this.setData({
        showModal: false,
      })
    },  

  takePhoto: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */

   formSubmit: function(e){
     const data = e.detail.value
     data.user_id = 1
     const url = app.globalData.url
     console.log(data)
     wx.request({
       url: `${url}/api/v1/rooms`,
       method: 'POST',
       data: data,
       success(res) {
         console.log(res)
       }
     })
    wx.switchTab({
      url: '/pages/rooms_index/rooms_index',
    })
   },
  onLoad: function (options) {

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