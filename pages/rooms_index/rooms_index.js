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
  formSubmit:function(e){
    console.log(e.detail.value.search)
    this.onLoad(e.detail.value)
  },

  onLoad: function (options) {
    const page = this;
    const url = app.globalData.url
    const search = options.search? `?query=${options.search}`: ""
    // console.log("search",search)
    // ?query=${options.search}
    wx.request({
      url: `${url}/api/v1/rooms${search}`,
      method: 'GET',
      success(res) {
        // console.log(res)
        const rooms = res.data.rooms;
        // console.log("rooms:", rooms)
        if(search != ""){
          wx.showLoading({
            title: 'searching',
            duration: 2000
          })
        }else{}
        page.setData({
          rooms: rooms,
          value: ""
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