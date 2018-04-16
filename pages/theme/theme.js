// pages/theme/theme.js
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
      url: 'https://news-at.zhihu.com/api/4/themes',
      data: '',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.others)
        that.setData({
          list: res.data.others
        })
      }
    })
  }
})