// pages/hotlist/hotlist.js
const app=getApp()
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
      
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
               
               that.setData({
                   data,
               })
             }
           })
    },
    ViewhotlistContent(){
        wx.navigateTo({
          url: '../hotlistcontent/hotlistcontent?data='+this.data,
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