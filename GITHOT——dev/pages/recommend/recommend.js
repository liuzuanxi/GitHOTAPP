// pages/recommend/recommend.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: [],
        idd:[0,1,2,3,4],
        list_all:[],
        list:[
          {
                article_id:[],
                ttitle:[],
                url:[],
                key_words:["", ""],
                article:[]
          },
          {
            article_id:[],
            ttitle:[],
                url:[],
                key_words:["", ""],
                article:[]
          },
          {
            article_id:[],
            ttitle:[],
            url:[],
            key_words:["", ""],
            article:[]
          },
          {
            article_id:[],
                ttitle:[],
                url:[],
                key_words:["", ""],
                article:[]
          },
          {
            article_id:[],
            ttitle:[],
            url:[],
            key_words:["", ""],
            article:[]
          }

        ],
        isCollected:[false,false,false,false,false],
        t:[],
        which:true
    },

  
    Goto: function (options) 
    {
      console.log(options)
      var id =options.currentTarget.id
        wx.navigateTo({      
        
        url: './content/content?data_title='+this.data.list[id].ttitle
        +'&data_url='+this.data.list[id].url
        +'&data_keyword='+this.data.list[id].key_words
        +'&data_article='+this.data.list[id].article
        +'&data_article_id='+this.data.list[id].article_id
        +'&isC='+this.data.isCollected[id]
        +'&id='+id,    //要跳转到的页面路径     
     })  ,console.log(this.data.list[id].article_id)  
    },
    handleCollection:function (options) {

        let that=this
          var id=options.currentTarget.id
         var dataa=that.data.list[id].article_id
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

    

    

     
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      
      let that=this
      // this.setData({
      //   userInfo:getApp().globalDate.userInfo
      // })
      wx.showToast({
        title:'加载中....',
        icon:'loading',
        duration: 1000,
    });
    // for(var i=0;i<5;i++)
    // {
      wx.request({
    
        url: 'http://swlcyx.iicp.net/getProject/ ',
  
        data: {"topic_id":0,
              "user_id":"A"
      },
        method: 'POST',
        //header:{'Content-Type':"text/plain"},
       // timeout:1000, 
        success: function(res){
          // success
        
        console.log(res)
        console.log(Object.keys(res.data.data).length )
          var iC=res
         that.data.list_all = iC;
          
          that.setData({
            list_all:that.data.list_all,
            which:true
          })
          wx.showToast({
            title: '加载成功',
            icon:'success'
          })
           for(var i=0;i<5;i++)
       {
      //     var tem1=i
      //  var tem_string1=tem1.toString()
       that.data.list[i].article_id=res.data.data[parseInt(i)].article_id;
        that.data.list[i].ttitle=res.data.data[parseInt(i)].title
        that.data.list[i].url=res.data.data[parseInt(i)].url;
        that.data.list[i].key_words=res.data.data[parseInt(i)].key_words;
        that.data.list[i].article=res.data.data[parseInt(i)].article;
        that.data.isCollected[i]=res.data.data[parseInt(i)].is_collection
        that.setData({
         list:that.data.list,
         isCollected:that.data.isCollected
      })
       }
        },
        fail: function() {
          wx.showToast({
            title: '获取数据失败',
            icon:'error',
            duration: 1000
          })
          that.setData({
            which:false
          })
        },
        

        
      })   
      
    },
       

    // },

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
      let that=this
      // this.setData({
      //   userInfo:getApp().globalDate.userInfo
      // })
      wx.showToast({
        title:'加载中....',
        icon:'loading',
        duration: 1000,
    });
    // for(var i=0;i<5;i++)
    // {
      wx.request({
    
        url: 'http://swlcyx.iicp.net/getProject/ ',
  
        data: {"topic_id":0,
              "user_id":"A"
      },
        method: 'POST',
        //header:{'Content-Type':"text/plain"},
       // timeout:1000, 
        success: function(res){
          // success
        
        console.log(res)
          var iC=res
         that.data.list_all = iC;
          
          that.setData({
            list_all:that.data.list_all,
            which:true
          })
          wx.showToast({
            title: '加载成功',
            icon:'success'
          })
           for(var i=0;i<5;i++)
       {
          var tem1=i
       var tem_string1=tem1.toString()
       that.data.list[i].article_id=res.data.data[parseInt(i)].article_id;
        that.data.list[i].ttitle=res.data.data[parseInt(i)].title
        that.data.list[i].url=res.data.data[parseInt(i)].url;
        that.data.list[i].key_words=res.data.data[parseInt(i)].key_words;
        that.data.list[i].article=res.data.data[parseInt(i)].article;
        that.data.isCollected[i]=res.data.data[parseInt(i)].is_collection
        that.setData({
         list:that.data.list,
         isCollected:that.data.isCollected
      })
       }
        },
        fail: function() {
          wx.showToast({
            title: '获取数据失败',
            icon:'error',
            duration: 1000
          })
          that.setData({
            which:false
          })
        },
        

        
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