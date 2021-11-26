// pages/indiv/indiv.js
Page({

    /**
     * 页面的初始数据
     */
    data:{
        list:[
        {
            id:0,
            name:"Python",
            value:"isPython"
        },
        {
            id:1,
            name:"Java",
            value:"isJava"
        },
        {
            id:2,
            name:"C/C++",
            value:"isC/C++"
        },
        {
            id:3,
            name:"Front-end",
            value:"isFront-end"
        },
        {
            id:4,
            name:"database",
            value:"isdatabase"
        },
        {
            id:5,
            name:"IOT",
            value:"isIOT"
        },
        {
            id:6,
            name:"AI",
            value:"isAI"
        }
    ],
    checklist:[],
    },

    handleItemChange(e){
        const checklist=e.detail.value;
        //console.log(e);
        this.setData({
            checklist:checklist
        })
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