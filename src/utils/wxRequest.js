import wepy from 'wepy';
import utils from "@/utils/util.js";
import config from "@/utils/config.js";
// const { $Toast } = require('../iviewui/base/index');

//什么都没有的情况下是正式环境
function environment() {
  var env = wepy.getStorageSync("env");
  if (utils.isNotEmpty(env)) {
    if (env == 'test') {
      //测试环境
      return config.baseApi_test;
    } else if (env == 'dev') {
      //开发环境
      return config.baseApi_dev;
    } else if (env == 'debug') {
      //调试环境
      return config.baseApi_debug;
    } else {
      return config.baseApi_prod;
    }
  } else {
    return config.baseApi_prod;
  }
}
function get_token() {
  var token = wx.getStorageSync("token");
  if (utils.isNotEmpty(token)) {
    return token;
  }
  return "";
}

const wxRequest = async(par = {}) => {
  wepy.showLoading({
    title: '努力加载中...',
    mask: true
  })

  // $Toast({
  //   content: '加载中',
  //   type: 'loading'
  // });

  var param = {
    "app_id": config.app_id,
    "method": "",
    "version": '1.0',
    "data": {},
  }
  param.method = par.method ? par.method : 'POST';
  param.data = par.data;
  var url = environment();
  var token = get_token();
  if (par.version) {
    param.version = par.version;
  }

  let res = await wepy.request({
    url: url,
    method: 'POST',
    data: param,
    header: {'Content-Type': 'application/json', "authorization": token},
  });
  setTimeout(function () {
    wepy.hideLoading()
    }, 300)
  return res;
};

module.exports = {
    wxRequest
}
