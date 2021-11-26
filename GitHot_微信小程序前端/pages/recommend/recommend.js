// pages/recommend/recommend.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list:["0","1","2","3","4"],
        isCollected:[false,true,false,true,false]
    },

  
    Goto: function (options) 
    {
      console.log(options)
      var id =options.currentTarget.id
        wx.navigateTo({      
        url: '../recommend/content/content?data='+this.data.list[id]+'&id='+this.data.isCollected[id],    //要跳转到的页面路径     
     })  
    },
    handleCollection:function (options) {

          var id=options.currentTarget.id
          this.data.isCollected[id]=!this.data.isCollected[id]
          this.setData({
            isCollected:this.data.isCollected
          })
          //提示用户
          wx.showToast({
              title: this.data.isCollected[id] ? '收藏成功' : '取消收藏',
              icon:'success',
              // image:isCollected ? '../../../images/打勾.png' : '../../../images/打叉.png'
          })

          //点击收藏图标后缓存数据到数据库
          // wx.request({
          //   url: 'url',
          //   data: data,
          //   dataType: dataType,
          //   enableCache: true,
          //   enableHttp2: true,
          //   enableQuic: true,
          //   header: header,
          //   method: method,
          //   responseType: responseType,
          //   timeout: 0,
          //   success: (result) => {},
          //   fail: (res) => {},
          //   complete: (res) => {},
          // })
        },

    

    

     
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
  
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
      wx.showToast({
        title:'加载中....',
        icon:'loading',
        duration: 1000,
    });
    wx.request({

      url: 'https://URL',

      data: {},

      method: 'GET',

      timeout:1000,
     // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT

      // header: {}, // 设置请求的 header

      success: function(res){

        // success

      },

      fail: function() {

        // fail
        wx.showToast({
          title: '获取数据失败',
          icon:'loading',
          image: '../../images/打叉.png',
          duration: 1000,
          mask: false
        })

      },

      complete: function() {

        // complete

        wx.hideNavigationBarLoading() //完成停止加载

        wx.stopPullDownRefresh() //停止下拉刷新

      }

})             
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