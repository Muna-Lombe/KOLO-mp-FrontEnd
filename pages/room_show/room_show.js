// pages/room_show/room_show.js
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
     const userId = 2
     console.log(roomId)
     console.log(userId)
     console.log(date)
     wx.request({
      url: `https://kolo-app.herokuapp.com/api/v1/bookings/`,
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
      }
    });
   },
  onLoad: function (options) {
    const page = this;
    wx.request({
      url: `https://kolo-app.herokuapp.com/api/v1/rooms/${options.id}`,
      method: 'GET',
      success(res) {
        const room = res.data;
        console.log(room);
        page.setData(
          {room}
        );
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