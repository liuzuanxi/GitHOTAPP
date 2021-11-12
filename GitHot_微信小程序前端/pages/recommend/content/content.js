// pages/recommend/content/content.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      detailObj:{},
      index:null,
      // 是否收藏
      isCollected:false,
      text:["asdasdasdasd\nasdasd\nawsdadasdasd\n123123"]
    },
   handleCollection(){
    wx.navigateTo({      
      url: '../../recommend/recommend',    //要跳转到的页面路径

   })  
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
      //点击收藏图标后缓存数据到本地
    //把data中的index放到新let出来的index中,因为下面要把index也存进去,要用index来判断你收藏了哪个页面
 
    



    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
//根据本地缓存的数据判读用户是否收藏当前文章



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