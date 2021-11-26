// pages/recommend/content/content.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      list:[],
      // 是否收藏
      isCollected:false,
      text:["asdasdasdasd\nasdasd\nawsdadasdasd\n123123"]
    },
   handleCollection(){
  //   wx.navigateTo({      
  //     url: '../../recommend/recommend',    //要跳转到的页面路径

  //  })  
      this.data.isCollected = !this.data.isCollected
      this.setData({
       
        isCollected:this.data.isCollected
      })
      //提示用户
      wx.showToast({
          title: this.data.isCollected ? '收藏成功' : '取消收藏',
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


    this.setData({
    list:options.data,
    isCollected:JSON.parse(options.id) 

    })

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