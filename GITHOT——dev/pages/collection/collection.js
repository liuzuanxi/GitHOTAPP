// pages/collection/collection.js

Page({

    /**
     * 页面的初始数据
     */
   data: {
     idd:[],
      len:null,
      article_id:[],
      ttitle:[],
      url:[],
      article:[],
      isCollected:[],
      key_words:[],
      which:true
  },
  handleCollection:function (options) {

    let that=this
      var id=options.currentTarget.id
      console.log(id)
     var dataa=that.data.article_id[id]
    //  if (this.data.isCollected[id]==0) {
        wx.request({
          url: 'http://swlcyx.iicp.net/collection/',
          data:{"user_id":"A",
                "article_id":dataa},

        // header:{"Content-Type":"json;charset=UTF-8"},
          method:"POST",
          
          success:function(res){
            
            if(res.data.message=="success"){
              that.data.isCollected[id]=!that.data.isCollected[id]
            that.setData({
              isCollected:that.data.isCollected
            })
            wx.showToast({
              title: that.data.isCollected[id] ? '收藏成功' : '取消收藏',
              icon:'success',
          })
          }
            else{
              wx.showToast({
                title: "操作失败",
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
  req:function()
  {
    let that =this
    wx.request({
      url: 'http://swlcyx.iicp.net/getCollectionproject/',
      data:{"user_id":"A",    
    },
    method:"POST",

      success:function(res){
        console.log(res)

       if(res.data.message=="success")
         {
            var llen=Object.keys(res.data.data).length
            that.setData({
              len:llen
            })

            for(var i=0;i<that.data.len;i++)
            {
              that.data.article_id[i]=res.data.data[parseInt(i)].article_id;
              that.data.ttitle[i]=res.data.data[parseInt(i)].title
              that.data.url[i]=res.data.data[parseInt(i)].url;
              that.data.key_words[i]=res.data.data[parseInt(i)].key_words;
              that.data.article[i]=res.data.data[parseInt(i)].article;
              that.data.isCollected[i]=res.data.data[parseInt(i)].is_collection
              that.data.idd[i]=i
            }
            that.setData({
              ttitle:that.data.ttitle,
              key_word:that.data.key_words,
              article_id:that.data.article_id,
              isCollected:that.data.isCollected,
              url:that.data.url,
              article:that.data.article,
              idd:that.data.idd
            })
     
            console.log(res.data.data.article_id)
         }

      }
    })
  },
 
 Goto(options){
    let that=this
    console.log(options);
    var id=options.currentTarget.id;
    wx.navigateTo({
      url: '../recommend/content/content?data_title='+that.data.ttitle[id]
        +'&data_url='+that.data.url[id]
        +'&data_keyword='+that.data.key_words[id]
        +'&data_article='+that.data.article[id]
        +'&data_article_id='+that.data.article_id[id]
        +'&isC='+that.data.isCollected[id]
        +'&id='+id   //要跳转到的页面路径     
    })
  },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

      this.req();
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
      this.req()
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