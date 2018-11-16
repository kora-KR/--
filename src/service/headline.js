import { request } from "../utils/request.js";
import config from "../utils/config.js"
const base_static = config.static_url.static_base_v1;

// 资讯头条
function credit_headline(_this, par, func) {
  console.log(1)
  var credit_headline_param = config.api_method.v1.credit_headline;
  credit_headline_param.data = par.data;
  request(credit_headline_param, function (data) {
    console.log(data)
    if (data.code == 0) {
      var re_data = data.data;
      func(re_data);
    }
  });
}

module.exports = {
  credit_headline: credit_headline
}
