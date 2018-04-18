var WxParse = require('../wxParse/wxParse.js');
const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/3/section/' + options.detailId,
      data: '',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          list: res.data.stories
        })
      }
    })
  }
})