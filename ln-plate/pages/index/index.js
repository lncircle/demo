
const app = getApp()

Page({
  data: {
    car_num: ["","","","","","","","","新能源"],
    current_index: 0,
    isShow: true
  },
  onLoad: function () {

  },

  onReady: function () {
    this.plate = this.selectComponent("#plate");
  },

  selectInput: function (e) {
    var index = e.currentTarget.dataset.index
    this.setData ({
      current_index: index
    })
  },

  // 点击了删除按钮
  _deleteWord: function(e) {
    var index = this.data.current_index

    var word= ""
    if (index == 8 ) {
      word = "新能源"
    }else {
      this.setData ({
        canConfirm: false
      })
    }

    this.data.car_num.splice(index,1,word)

    var preIndex = index - 1
    if (index == 0) {
      preIndex = 0
    }

    if (index == 3) {
      preIndex = index - 2
    }
    this.setData ({
      car_num: this.data.car_num,
      current_index: preIndex
    })
    this.getPlate()
  },

  // 点击了文字按钮
  _clickWord: function(e) {
    // console.log('点击了 ' + e.detail.word)
    var index = this.data.current_index
    var word = e.detail.word

    this.data.car_num.splice(index,1,word)

    var nextIndex = index + 1
    if (index == 8) {
      nextIndex = 8
    }

    if (index == 1) {
      nextIndex = index + 2
    }
    this.setData ({
      car_num: this.data.car_num,
      current_index: nextIndex
    })
    this.getPlate()
  },

  getPlate: function () {
    var plates = JSON.parse(JSON.stringify(this.data.car_num))
    plates.splice(2,1,'')
    if (plates.length == 9 && plates[8].length > 1) {
      plates.splice(8,1,'')
    }

    var plate = plates.join("")
    console.log('输入的车牌为：' + plate)
  }
})
