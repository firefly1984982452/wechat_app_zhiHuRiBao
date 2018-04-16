Page({
  data: {
    detailId:""
  },
  onLoad: function (options) {
    console.log(options);
    this.setData({
      detailId: options.detailId
    })
  },
})