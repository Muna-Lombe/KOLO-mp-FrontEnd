// pages/room_show/room_show.js
let app = getApp()
Page({
  
  /**
   * Page initial data
   */
  data: {
    
  },

  /**
   * Lifecycle function--Called when page load
   */

   bookItem: function(e){
     const roomId = this.data.room.id
     const date = this.data.room.date
     const userId = 1
     const url = app.globalData.url
    //  console.log(roomId)
    //  console.log(userId)
    //  console.log(date)
    //  wx.request({
    //   // url: `https://kolo-app.herokuapp.com/api/v1/bookings/`,
    //   url: `${url}/api/v1/bookings/`,
    //   method: 'POST',
    //   data: {
    //     date: date,
    //     room_id:roomId,
    //     user_id:userId
    //   },
    //   success(res) {
    //     const booking = res.data;
    //     console.log(booking);
    //     wx.hideToast();
    //     wx.switchTab({
    //       url: '/pages/bookings_index/bookings_index',
    //     })
    //   }
    // });
   },
   formSubmit:function(e){
    // console.log("e:",e)
    const url = app.globalData.url
    const content = e.detail.value.comment
    const id = e.currentTarget.id
    const date = new Date().toDateString()

    const comment = {date:date, name:"Muha", comment:content, booking_id: id }
    wx.request({
      url: `${url}/api/v1/bookings/${id}`,
      method: 'POST',
      data:{comment:comment},
      success(res){
        console.log(res)
      }
    })

   },
  onLoad: function (options) {
    const page = this;
    const url = app.globalData.url
    console.log(options)
    wx.request({
      // url: `https://kolo-app.herokuapp.com/api/v1/rooms/${options.id}`,
      url: `${url}/api/v1/bookings/${options.id}`,
      method: 'GET',
      success(res) {
        const booking = res.data;
        console.log("booking",booking);
        const room = booking.room
        const comments = booking.comment
        page.setData({
          room,
          comments,
          id:options.id
        })
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