// pages/all/all.js
const app = getApp()

Page({
  data: {
    list: [],
    // tab切换  
    currentTab: 0,
  },
  onLoad: function () {

    var that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/3/sections',
      data: '',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          list: res.data.data
        })
      }
    })
  }
})