Component({
 
  properties: {
    isShow: {
      type: Boolean,
      value: false,
    },
    keyBoardInputIndex: {
      type: Number,
      value: 0,
    }
  },

  data: {
    k_word_1: ["京","沪","粤","津","冀","晋","蒙","辽","吉","黑"],
    k_word_2: ["苏","浙","皖","闽","赣","鲁","豫","鄂","湘"],
    k_word_3: ["桂","琼","渝","川","贵","云","藏"],
    k_word_4: ["陕","甘","青","宁","新"],
    k_word_5: ["1","2","3","4","5","6","7","8","9","0"],
    k_word_6: ["A","B","C","D","E","F","G","H","J","K"],
    k_word_7: ["L","M","N","P","Q","R","S","T","U","V"],
    k_word_8: ["W","X","Y","Z","学","警","挂"]
  },

  methods: {

    _clickWord:function (e) {
      var word = {word:e.currentTarget.dataset.value}
      this.triggerEvent("clickWord",word)
    },
    deleteWord:function () {
      this.triggerEvent("deleteWord")
    }
  }
})
