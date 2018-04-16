var WxParse = require('../../wxParse/wxParse.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailId:{
      type:String,
      value:"0"
    }
  },
  data: {
    data: {},
    info: {},
  },
  ready(){
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/' + this.properties.detailId,
      data: '',
      header: {
        'Content-Type': 'json'
      },
      success:(res)=> {
        var article = res.data.body;
        WxParse.wxParse('article', 'html', article, this);
      }
    })
  },
  methods: {

  }
})
