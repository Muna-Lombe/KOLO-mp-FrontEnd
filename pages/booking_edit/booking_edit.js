// pages/booking_edit/booking_edit.js
let app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
        roomId:"",
        name:"",
        address:"",
        description:"",
        date:"",
        capacity:"",
        price:"",
        phone_number:""
  },

  /**
   * Lifecycle function--Called when page load
   */

  deleteData:function(){
    console.log(this.data)
    const id = Number.parseInt(this.data.roomId)
    const url = app.globalData.url
    console.log(id)

    wx.request({
      url: `${url}/api/v1/rooms/${id}`,
      method: 'DELETE',
      success(res) {
        console.log("success")
        console.log(res.data)
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  },

  formSubmit:function(e){
    const data = e.detail.value
    // console.log("data-id",this.data)
    const id = Number.parseInt(this.data.roomId)
    // console.log(id)
    const url = app.globalData.url
    wx.request({
      url: `${url}/api/v1/rooms/${id}`,
      method: "PUT",
      data: data,
      success(res) {
        console.log("success")
        console.log(res.data)
        wx.navigateBack({
          delta: 1,
        })
      }
    })
  },

  onLoad: function (options) {
    const page = this
    console.log("options",options)
    const id = options.id
    const url = app.globalData.url
    wx.request({
      url: `${url}/api/v1/rooms/${options.id}`,
      success(res) {
        console.log(res.data)
        const listing = res.data;
        page.setData({
        roomId:id,
        name:listing.name,
        address:listing.address,
        description:listing.description,
        date:listing.date,
        capacity:listing.capacity,
        price:listing.price,
        phone_number:listing.phone_number
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