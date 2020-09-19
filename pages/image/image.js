// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagepath:"",
  },
  handleChooseAlbum() {
    // 系统api，让用户在相册中选择图片（或者拍照）
    wx.chooseImage({
      success:(res)=> {
        // console.log(res);
        // 取出用户选中图片的路径
        const path = res.tempFilePaths[0]
        // 设置imagepath
        this.setData({
          imagepath:path
        }) 
      }
    })
    
  },
  loadimage() {
    console.log('图片加载完成');
  }
})