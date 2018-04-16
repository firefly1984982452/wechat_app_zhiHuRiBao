//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [],
    swiper:[],
    // tab切换  
    currentTab: 0,
  },
  
  onLoad: function () {

    var that = this;
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      data: '',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.stories)
        that.setData({
          list: res.data.stories,
          swiper: res.data.top_stories
        })
      }
    })
  }
})