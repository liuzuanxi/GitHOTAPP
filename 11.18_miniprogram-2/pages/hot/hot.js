// pages/hot/hot.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hotData:[],
        hotlist:[['id0\n填充内容0'],['id1\n填充内容1']],
        //hotlist:[['id0','填充内容0'],['id1','填充内容1']],
    },
    hotfunction(e) {
        var hotData = [];
        hotData[0]='元宇宙';
        hotData[1]='原生云';
        this.setData({
            hotData,
        })
    },
    Viewhotlist(options){
        console.log(options);
        var id=options.currentTarget.id;
        wx.navigateTo({
          url: '../hotlist/hotlist?data='+JSON.stringify(this.data.hotlist[id])

        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.hotfunction();
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