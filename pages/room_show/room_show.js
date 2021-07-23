// pages/room_show/room_show.js
let app = getApp()
Page({
  
  /**
   * Page initial data
   */
  data: {
    showModal: false,
  },

  /**
   * Lifecycle function--Called when page load
   */


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

   bookItem: function(e){
     const roomId = this.data.room.id
     const date = this.data.room.date
     const userId = app.globalData.userInfo.id
     const url = app.globalData.url
     console.log(roomId)
     console.log(userId)
     console.log(date)
     wx.request({
      // url: `https://kolo-app.herokuapp.com/api/v1/bookings/`,
      url: `${url}/api/v1/bookings/`,
      method: 'POST',
      data: {
        date: date,
        room_id:roomId,
        user_id:userId
      },
      success(res) {
        const booking = res.data;
        console.log(booking);
        wx.hideToast();
        wx.switchTab({
          url: '/pages/bookings_index/bookings_index',
        })
      }
    });
   },

  onLoad: function (options) {
    const page = this;
    const url = app.globalData.url
    wx.request({
      // url: `https://kolo-app.herokuapp.com/api/v1/rooms/${options.id}`,
      url: `${url}/api/v1/rooms/${options.id}`,
      method: 'GET',
      success(res) {
        const room = res.data;
        console.log(room);
        page.setData({
          room,
          default: room.users.length >= room.capacity
        })
        wx.hideToast();
      }
    });
    // const users = this.data.room.users
    // const capacity = this.data.room.capacity
    // if (users<capacity){
    //     page.setData({
    //       default: true
    //     })
    // }else{
    //   page.setData({
    //     default: false
    //   })
    // }
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