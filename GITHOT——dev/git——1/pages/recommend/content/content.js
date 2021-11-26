// pages/recommend/content/content.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      view:true,
      which:true,
      title:[],
      url:[],
      keyword:[],
      article:[],
      article_id:[],
      isCollected:false,
      id:null,
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
    handleCollection:function (options) {
      let that=this
      var aid=that.data.article_id
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
            var pages=getCurrentPages()
            var currpage = pages[pages.length-1];//当前页面
            var prepage = pages[pages.length-2]// 上一页
            prepage.data.isCollected[that.data.id]=that.data.isCollected
            prepage.setData({
              isCollected:prepage.data.isCollected
            })
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
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {


          this.setData({
          
          isCollected:JSON.parse(options.isC) ,
          id:options.id,
          title:options.data_title,
          url:options.data_url,
          article:options.data_article,
          article_id:options.data_article_id,
          keyword:options.data_keyword,
          which:true
          })
          setTimeout(this.add_one, 5000);

    },
    add_one :function name(params) {
      let that=this
      wx.request({
        url: 'http://swlcyx.iicp.net/collection/',
        data:{"user_id":"A",
               "article_id":that.data.article_id ,
      } ,
        method:"POST",
        // success:function (res) {
        //   showToast

        // }
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
      let that=this;
      wx.showToast({
        title:'加载中....',
        icon:'loading',
        duration: 1000,
    });
    wx.request({

      url: 'https://httpbin.org/headers',

      data: {},

      method: 'POST',

      timeout:1000,
     // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT

      // header: {}, // 设置请求的 header

      success: function(res){
        let that=this;
        // success
        console.log(res);
        var ic = res.data.headers["Accept-Encoding"];
        wx.showToast({
          title: '获取成功',
          icon:"success"
        })
        that.setData({
          isCollected:ic
        })
      },

      fail: function() {

        // fail
        that.setData({
          which:false
        })
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