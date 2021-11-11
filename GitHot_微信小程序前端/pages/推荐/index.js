// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    reach: function(that) {
        wx.showNavigationBarLoading() //加载动画
        wx.request({
          url: "",
          data: {
            classify_id: 46,
            page: that.data.pages
          },
          header: {
            "content-type": "application/json"
          },
          success: function(e) {
          wx.hideNavigationBarLoading() //停止加载动画
            console.log(that.data.pages)
            //有数据传数据
            if (e.data.list != null) {
              console.log(e.data.list, that.data.pages)
              //第一次加载把数据直接传给page_sections
              if (that.data.pages == 1) {
                that.setData({
                  Page_sections: e.data.list
                })
              } else { //不是第一次加载的时候将两个数组合并
                that.setData({
                  Page_sections: that.data.Page_sections.concat(e.data.list)
                })
              }
            } else { //没有数据将底部没有数据信息显示
              that.setData({
                dataHidden: false
              })
            }
          }
        })
      },
      onReachBottom: function() {
        var that = this;
        that.data.pages++
        that.reach(that);
      },
      //下拉刷新
      onPullDownRefresh: function () {
        this.setData({
          pages:1
        })
       this.reach();
        wx.stopPullDownRefresh() //停止下拉刷新
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var that = this;
        //执行加载请求函数
        that.reach(that);
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
        // setTimeout(()=>{
        //     //方法调用的方式触发下拉刷新事件
        //    // wx.showNavigationBarLoading()
        //     wx.startPullDownRefresh()
            
        // },1000)
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