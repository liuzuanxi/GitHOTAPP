// pages/hotlistcontent/hotlistcontent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        view:true,
      which:true,
      isCollected:false,
      id:null,
      data:[],
    },
    changeview:function() {
        this.data.view=!this.data.view
        wx.showToast({
          title: '加载中',
          icon:'loading'
        })
        this.setData({
          view:this.data.view
        })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        var data=options
        this.data.data=options
        this.setData({
            data,
        })
    },
    handleCollection:function (options) {
        let that=this
        var aid=that.data.data.article_id
          wx.request({
            url: 'http://swlcyx.iicp.net/collection/',
                data:{"user_id":"A",
                      "article_id":aid},
  
              // header:{"Content-Type":"json;charset=UTF-8"},
                method:"POST",
  
            success:function(res){
              console.log(res)
              
              if(res.data.message=="success"){
                that.data.isCollected=!that.data.isCollected
                that.setData({
                  isCollected:that.data.isCollected
                })
            //   var pages=getCurrentPages()
            //   var currpage = pages[pages.length-1];//当前页面
            //   var prepage = pages[pages.length-2]// 上一页
            //   prepage.data.isCollected[that.data.id]=that.data.isCollected
            //   prepage.setData({
            //     isCollected:prepage.data.isCollected
            //   })
              wx.showToast({
                title: that.data.isCollected ? '收藏成功' : '取消收藏',
                icon:'success',
            })
          }
            else{
              wx.showToast({
                title: '操作失败',
                icon:'error',
            })
            }
            },
  
            fail:function(){
              wx.showToast({
                title:'收藏失败 ',
                icon:'error'
            })
            }
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