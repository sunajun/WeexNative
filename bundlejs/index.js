// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(4)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/tianan/Documents/Weex/weexNative-h5/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3c3175ca"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "86",
    "alignItems": "center",
    "position": "sticky"
  },
  "title-background": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "#ececec",
    "borderRadius": "4",
    "width": "614",
    "height": "50"
  },
  "title-query": {
    "fontSize": "28",
    "fontFamily": "\"PingFang SC\"",
    "color": "#333333",
    "textAlign": "center"
  },
  "slider": {
    "flexDirection": "row",
    "width": "750",
    "height": "528"
  },
  "slider-pages": {
    "flexDirection": "row",
    "width": "750",
    "height": "528"
  },
  "image": {
    "width": "750",
    "height": "528"
  },
  "indicator": {
    "width": "750",
    "height": "528",
    "position": "absolute",
    "top": "236",
    "left": "1",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#ffa400",
    "itemSize": 20
  },
  "icon-name": {
    "fontFamily": "\"PingFang SC-Light\"",
    "fontSize": "24",
    "color": "#333333",
    "textAlign": "center",
    "marginTop": "23"
  },
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0
  },
  "countdown": {
    "alignItems": "center"
  },
  "time": {
    "position": "absolute",
    "top": "28",
    "left": "368"
  },
  "hour": {
    "position": "absolute",
    "top": "28",
    "left": "375",
    "justifyContent": "center"
  },
  "time_text": {
    "fontFamily": "PingFangSC-Medium",
    "fontSize": "22",
    "color": "#ffffff",
    "textAlign": "left"
  },
  "hour-colon": {
    "position": "absolute",
    "top": "34",
    "left": "414",
    "justifyContent": "center"
  },
  "minute_background": {
    "position": "absolute",
    "top": "28",
    "left": "426",
    "justifyContent": "center"
  },
  "minute": {
    "position": "absolute",
    "top": "28",
    "left": "433",
    "justifyContent": "center"
  },
  "minuter-colon": {
    "position": "absolute",
    "top": "34",
    "left": "474",
    "justifyContent": "center"
  },
  "second_background": {
    "position": "absolute",
    "top": "28",
    "left": "486",
    "justifyContent": "center"
  },
  "second": {
    "position": "absolute",
    "top": "28",
    "left": "493",
    "justifyContent": "center"
  },
  "arrow": {
    "position": "absolute",
    "top": "28",
    "left": "526",
    "justifyContent": "center"
  },
  "slider-horizontal": {
    "backgroundColor": "#ececec",
    "borderRadius": "4",
    "width": "240",
    "height": "240"
  },
  "shop-icon": {
    "width": "286",
    "height": "286"
  },
  "upTop": {
    "width": "80",
    "height": "80",
    "position": "fixed",
    "right": "20",
    "bottom": "20"
  },
  "gotoTop": {
    "width": "80",
    "height": "80"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _url = __webpack_require__(3);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  data: function data() {
    return {
      query: _url2.default.apiurl.resurl + "query.png",
      scan: _url2.default.apiurl.resurl + "scan.png",
      list_title: _url2.default.apiurl.resurl + "list_title.png",
      countDownBackgroundUrl: _url2.default.apiurl.resurl + "time_background.png",
      timeUrl: _url2.default.apiurl.resurl + "time.png",
      timeIconUrl: _url2.default.apiurl.resurl + "time_icon.png",
      arrowUrl: _url2.default.apiurl.resurl + "arrow.png",
      gotoTopUrl: _url2.default.apiurl.resurl + "goto_top.png",
      time: 0,
      hour_time: 30,
      minute_time: 40,
      second_time: 60,
      refreshDisplay: 'show',
      isShowTop: false,
      sliderContent: [{ itemId: '520421163634', title: 'item1', pictureUrl: _url2.default.apiurl.resurl + 'slider1.png' }, { itemId: '522076777462', title: 'item2', pictureUrl: _url2.default.apiurl.resurl + 'silder2.png' }, { itemId: '522076777462', title: 'iten3', pictureUrl: _url2.default.apiurl.resurl + 'slider1.png' }, { itemId: '522076777462', title: 'iten3', pictureUrl: _url2.default.apiurl.resurl + 'slider1.png' }, { itemId: '522076777462', title: 'iten3', pictureUrl: _url2.default.apiurl.resurl + 'slider1.png' }],
      iconList: [{
        data: [{ name: "電視優惠", icon: _url2.default.apiurl.resurl + 'icon1.png' }, {
          name: "冷氣優惠",
          icon: _url2.default.apiurl.resurl + 'icon2.png'
        }, { name: "相機優惠", icon: _url2.default.apiurl.resurl + 'icon3.png' }, {
          name: "手機優惠",
          icon: _url2.default.apiurl.resurl + 'icon4.png'
        }]
      }, {
        data: [{ name: "Microsoft專區", icon: _url2.default.apiurl.resurl + 'icon5.png' }, {
          name: "Apple專區",
          icon: _url2.default.apiurl.resurl + 'icon6.png'
        }, { name: "促銷頻道", icon: _url2.default.apiurl.resurl + 'icon7.png' }, {
          name: "促銷頻道",
          icon: _url2.default.apiurl.resurl + 'icon8.png'
        }]
      }],
      sliderhorizontal: [{
        name: '華碩 (ASUS) UX1',
        price: 'HK$2,999',
        oldPrice: 'HK$1,999',
        pictureUrl: _url2.default.apiurl.resurl + 'computer.png'
      }, {
        name: '華碩 (ASUS) UX2',
        price: 'HK$2,999',
        oldPrice: 'HK$1,999',
        pictureUrl: _url2.default.apiurl.resurl + 'pad.png'
      }, {
        name: '華碩 (ASUS) UX3',
        price: 'HK$2,999',
        oldPrice: 'HK$1,999',
        pictureUrl: _url2.default.apiurl.resurl + 'print.png'
      }, {
        name: '華碩 (ASUS) UX4',
        price: 'HK$2,999',
        oldPrice: 'HK$1,999',
        pictureUrl: _url2.default.apiurl.resurl + 'computer.png'
      }, {
        name: '華碩 (ASUS) UX5',
        price: 'HK$2,999',
        oldPrice: 'HK$1,999',
        pictureUrl: _url2.default.apiurl.resurl + 'pad.png'
      }],
      shops: [{
        data: [{
          name: "Apple iPhone 7 128GB",
          icon: _url2.default.apiurl.resurl + 'nikon.png',
          price: "HK$3,998.00"
        }, {
          name: "三星 Galaxy J3 Pro（J3110）2+16G 皓月銀",
          icon: _url2.default.apiurl.resurl + 'computer.png',
          price: "HK$19,999.00"
        }]
      }, {
        data: [{
          name: "Apple iPhone 7 128GB 玫瑰金色",
          icon: _url2.default.apiurl.resurl + 'headset.png',
          price: "HK$3,998.00"
        }, { name: "Apple iPhone 7 128GB", icon: _url2.default.apiurl.resurl + 'pad.png', price: "HK$3,998.00" }]
      }]
    };
  },
  created: function created() {
    this.refreshDisplay = 'show';
  },

  methods: {
    hideTop: function hideTop() {},
    onloadmore: function onloadmore() {},
    sliderClick: function sliderClick() {
      console.log('点击了');
    },
    goTopClick: function goTopClick() {
      var el = this.$refs.itemh;
      dom.scrollToElement(el, {
        offset: 0
      });
    },
    queryShops: function queryShops() {},
    scanClick: function scanClick() {},
    onpullingdown: function onpullingdown() {},
    onrefresh: function onrefresh() {
      this.refreshDisplay = 'show';
      modal.toast({
        message: '刷新成功',
        duration: 3
      });
      this.refreshDisplay = 'hide';
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.apiurl = {
  resurl: 'http://10.83.4.85/weexNative-h5/images/'
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticStyle: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: "18px"
    }
  }, [_c('div', {
    staticClass: ["title-background"],
    on: {
      "click": _vm.queryShops
    }
  }, [_c('image', {
    staticStyle: {
      width: "30px",
      height: "30px"
    },
    attrs: {
      "src": _vm.query
    }
  }), _c('text', {
    staticClass: ["title-query"]
  }, [_vm._v("搜索商品")])]), _c('div', {
    staticStyle: {
      height: "36px",
      marginLeft: "30px"
    }
  }, [_c('image', {
    staticStyle: {
      width: "36px",
      height: "36px"
    },
    attrs: {
      "src": _vm.scan
    },
    on: {
      "click": _vm.scanClick
    }
  })])])]), _c('list', {
    attrs: {
      "loadmoreoffset": "80"
    },
    on: {
      "loadmore": _vm.onloadmore
    }
  }, [_c('refresh', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.refreshDisplay),
      expression: "refreshDisplay"
    }],
    staticStyle: {
      width: "750px",
      flexDirection: "row",
      justifyContent: "center"
    },
    attrs: {
      "display": _vm.refreshDisplay
    },
    on: {
      "pullingdown": _vm.onpullingdown,
      "refresh": _vm.onrefresh
    }
  }, [_c('loading-indicator', {
    staticStyle: {
      height: "80px",
      width: "80px",
      color: "#3192e1"
    }
  })]), _c('cell', {
    ref: "itemh",
    appendAsTree: true,
    attrs: {
      "append": "tree"
    },
    on: {
      "appear": _vm.hideTop
    }
  }, [_c('div', [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "interval": "3000",
      "autoPlay": "true"
    }
  }, [_vm._l((_vm.sliderContent), function(item) {
    return _c('div', {
      staticClass: ["slider-pages"],
      on: {
        "click": _vm.sliderClick
      }
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": item.pictureUrl
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator"]
  })], 2)])]), _vm._l((_vm.iconList), function(icon, index) {
    return _c('cell', {
      staticStyle: {
        flexDirection: "row"
      },
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, _vm._l((icon.data), function(image) {
      return _c('div', {
        staticStyle: {
          flex: "1",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "37px"
        },
        on: {
          "click": _vm.sliderClick
        }
      }, [_c('image', {
        staticStyle: {
          height: "100px",
          width: "100px"
        },
        attrs: {
          "src": image.icon
        }
      }), _c('text', {
        staticClass: ["icon-name"]
      }, [_vm._v(_vm._s(image.name))])])
    }))
  }), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticStyle: {
      height: "26px",
      backgroundColor: "#ececec",
      marginTop: "37px"
    }
  }), _c('div', {
    staticStyle: {
      height: "80px"
    }
  }, [_c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["countdown"]
  }, [_c('image', {
    staticStyle: {
      width: "750px",
      height: "80px"
    },
    attrs: {
      "src": _vm.countDownBackgroundUrl
    }
  })]), _c('div', {
    staticClass: ["time"]
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "30px"
    },
    attrs: {
      "src": _vm.timeUrl
    }
  })]), _c('div', {
    staticClass: ["hour"]
  }, [_c('text', {
    staticClass: ["time_text"]
  }, [_vm._v(_vm._s(_vm.hour_time))])]), _c('div', {
    staticClass: ["hour-colon"]
  }, [_c('image', {
    staticStyle: {
      width: "4px",
      height: "18px"
    },
    attrs: {
      "src": _vm.timeIconUrl
    }
  })]), _c('div', {
    staticClass: ["minute_background"]
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "30px"
    },
    attrs: {
      "src": _vm.timeUrl
    }
  })]), _c('div', {
    staticClass: ["minute"]
  }, [_c('text', {
    staticClass: ["time_text"]
  }, [_vm._v(_vm._s(_vm.minute_time))])]), _c('div', {
    staticClass: ["minuter-colon"]
  }, [_c('image', {
    staticStyle: {
      width: "4px",
      height: "18px"
    },
    attrs: {
      "src": _vm.timeIconUrl
    }
  })]), _c('div', {
    staticClass: ["second_background"]
  }, [_c('image', {
    staticStyle: {
      width: "40px",
      height: "30px"
    },
    attrs: {
      "src": _vm.timeUrl
    }
  })]), _c('div', {
    staticClass: ["second"]
  }, [_c('text', {
    staticClass: ["time_text"]
  }, [_vm._v(_vm._s(_vm.second_time))])]), _c('div', {
    staticClass: ["arrow"]
  }, [_c('image', {
    staticStyle: {
      width: "27px",
      height: "30px"
    },
    attrs: {
      "src": _vm.arrowUrl
    }
  })])])]), _c('scroller', {
    staticStyle: {
      flexDirection: "row"
    },
    attrs: {
      "scrollDirection": "horizontal"
    }
  }, _vm._l((_vm.sliderhorizontal), function(item) {
    return _c('div', {
      staticStyle: {
        justifyContent: "center",
        marginTop: "20px",
        marginLeft: "30px"
      },
      on: {
        "click": _vm.sliderClick
      }
    }, [_c('image', {
      staticClass: ["slider-horizontal"],
      attrs: {
        "src": item.pictureUrl
      }
    }), _c('text', {
      staticStyle: {
        marginTop: "10px",
        fontSize: "24px",
        fontFamily: "'PingFang SC'",
        color: "#000000"
      }
    }, [_vm._v(_vm._s(item.name))]), _c('text', {
      staticStyle: {
        marginTop: "7px",
        fontSize: "28px",
        fontFamily: "'PingFang SC'",
        color: "#ff8800"
      }
    }, [_vm._v(_vm._s(item.price))]), _c('text', {
      staticStyle: {
        marginTop: "10px",
        fontSize: "20px",
        fontFamily: "'PingFang SC'",
        color: "#999999",
        textDecoration: "line-through"
      }
    }, [_vm._v(_vm._s(item.oldPrice))])])
  })), _c('div', {
    staticStyle: {
      height: "20px",
      backgroundColor: "#ececec",
      marginTop: "26px"
    }
  })]), _c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticStyle: {
      height: "80px",
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center"
    }
  }, [_c('image', {
    staticStyle: {
      width: "750px",
      height: "80px"
    },
    attrs: {
      "src": _vm.list_title
    }
  })]), _vm._m(0)]), _vm._l((_vm.shops), function(item) {
    return _c('cell', {
      staticStyle: {
        flexDirection: "row"
      },
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": _vm.sliderClick
      }
    }, _vm._l((item.data), function(shop) {
      return _c('div', {
        staticStyle: {
          justifyContent: "center",
          flex: "1",
          borderBottomWidth: "1px",
          borderBottomColor: "#d8d8d8"
        }
      }, [_c('div', {
        staticStyle: {
          flexDirection: "row"
        }
      }, [_c('div', {
        staticStyle: {
          marginBottom: "32px",
          flex: "1"
        }
      }, [_c('div', {
        staticStyle: {
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px"
        }
      }, [_c('image', {
        staticClass: ["shop-icon"],
        attrs: {
          "src": shop.icon
        }
      })]), _c('text', {
        staticStyle: {
          marginTop: "37px",
          marginLeft: "-90px",
          fontSize: "24px",
          fontFamily: "PingFangSC-Light",
          color: "#000000",
          letterSpacing: "0",
          height: "64px"
        }
      }, [_vm._v("\n                            " + _vm._s(shop.name) + "\n                        ")]), _c('text', {
        staticStyle: {
          marginTop: "4px",
          marginLeft: "20px",
          fontSize: "32px",
          fontFamily: "PingFangSC-Semibold",
          color: "#ff8000"
        }
      }, [_vm._v("\n                            " + _vm._s(shop.price) + "\n                        ")])]), _vm._m(1, true)])])
    }))
  })], 2), _c('div', {
    staticClass: ["upTop"],
    attrs: {
      "if": _vm.isShowTop
    },
    on: {
      "click": _vm.goTopClick
    }
  }, [_c('img', {
    staticClass: ["gotoTop"],
    attrs: {
      "src": _vm.gotoTopUrl
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      backgroundColor: "#d8d8d8",
      height: "1px"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('text', {
    staticStyle: {
      backgroundColor: "#d8d8d8",
      width: "1px",
      height: "490px"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);