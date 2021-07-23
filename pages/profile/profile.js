// pages/profile/profile.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    listings: ""
  },
  // switchToBookingsIndex: function() {
  //   wx.switchTab({
  //     url: '/pages/bookings_index/bookings_index'
  //   })
  // },
  /**
   * Lifecycle function--Called when page load
   */
  passData: function(e){
    console.log(e.currentTarget.id)
    const id = e.currentTarget.id
    console.log(this.data.listings[id-1])
    const listingData = this.data.listings[id-1]
    wx.navigateTo({
      url: `/pages/booking_edit/booking_edit?id= ${id}`,
    })
  },

  deleteData:function(){
    const url = app.globalData.url
    wx.request({
      url: `${url}/api/v1/rooms/${id}`,
      method: "DELETE",
      data: data,
      success(res) {
        console.log("success")
        console.log(res.data)
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },

  onLoad: function (options) {
    const user = app.globalData.userProfile
    console.log("user",user)
    const name= user.nickName
    const avatar = user.avatarUrl
    const page = this
    const url = app.globalData.url
    console.log(options)
    wx.request({
      url: `${url}/api/v1/users/1/profile`,
      success(res) {
        console.log(res.data)
        const listings = res.data.my_rooms;
        console.log(listings)
        page.setData({
          listings: listings,
          name:name,
          avatar:avatar
        })
      }
    })
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
  onUnload: function (e) {
    console.log(e)
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