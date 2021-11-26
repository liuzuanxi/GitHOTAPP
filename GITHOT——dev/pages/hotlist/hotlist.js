// pages/hotlist/hotlist.js
const app=getApp()
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
      hotdata:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options)
        var id=options.data;
        wx.request({
            method:'post',
            data:{
                "topic_id":id,
                "user_id":'A',
            },
             url:'http://swlcyx.iicp.net/getProject/',
             success:(res)=> {
               console.log(res)
               console.log(res.data.data)
               const that=this
               var data=res.data.data
               this.data.hotdata=data
               
               that.setData({
                   data,
                   
               })
             }
           })
    },
    ViewhotlistContent(options){
      console.log(options)
      console.log(this.data.hotdata)
      var id=options.currentTarget.id
        wx.navigateTo({
          url: '../hotlistcontent/hotlistcontent?article='+this.data.hotdata[id].article
          +'&article_id='+this.data.hotdata[id].article_id
          +'&is_collection='+this.data.hotdata[id].is_collection
          +'&key_words='+this.data.hotdata[id].key_words
          +'&title='+this.data.hotdata[id].title
          +'&url='+this.data.hotdata[id].url
          +'&is_collection='+this.data.hotdata[id].is_collection
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function (options) {

       
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