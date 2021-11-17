// pages/collection/collection.js

Page({

    /**
     * 页面的初始数据
     */
   data: {
    detailObj:{},
    index:null,
    // 是否收藏
    isCollected:true,
    'collected': []
  },
  collectionData(e){
      let collected = [];
      collected[0]='123';
      collected[1]='456';
    this.setData({
        collected,
    })
  },
 handleCollection(){
    let isCollected = !this.data.isCollected
    this.setData({
      // 下面本来是这样子的:isCollected=isCollected,可以简写
      isCollected
    })
    //提示用户
    wx.showToast({
        title: isCollected ? '收藏成功' : '取消收藏',
        icon:'success'
    })

  },
  ViewCollection(){
    wx.navigateTo({
      url: '../collectioncontent/collectioncontent',
    })
  },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      this.collectionData();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})