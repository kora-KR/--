import { wxRequest } from '@/utils/wxRequest';
import config from "../utils/config.js"
import wepy from "wepy";

// 处理登录信息
const login = ()=> {
  //登录
  wx.login({
    success(res) {
      var login_param = config.api_method.v1.login;
      login_param.data.app_id = config.wechat_app_id;
      login_param.data.code = res.code;
      //发起登录
      var logoTip = wxRequest(login_param)
      logoTip.then(res => {
        if (res.data.code == 0) {
          console.log(res.data.data.token)
          wepy.setStorageSync("token", res.data.data.token);
          if (res.sub_code == '3005') {
            wepy.setStorageSync("is_register", "1");
          }
        }
      })
    }
  });
}

// 用户授权
const login_userinfo = (par)=> {
  var user_info = config.api_method.v1.getUserInfo;
  user_info.data.raw_data = par.rawData;
  user_info.data.signature = par.signature;
  user_info.data.iv = par.iv;
  user_info.data.encrypted_Data = par.encryptedData;
  return wxRequest(user_info);
}

// 资讯头条
const  credit_headline = (par) =>{
  var credit_headline_param = config.api_method.v1.credit_headline;
  credit_headline_param.data = par.data;
  return wxRequest(credit_headline_param);
};

// 企业搜索
const  enterprise_search = (par) =>{
  var enterprise_search_param = config.api_method.v1.enterprise_search;
  enterprise_search_param.data = par.data;
  return wxRequest(enterprise_search_param);
};

// 企业详情
const enterprise_detial = (par)=> {
  var enterprise_detail_param = config.api_method.v1.enterprise_detail;
  enterprise_detail_param.data.id = par.id;
  return wxRequest(enterprise_detail_param);
}

// 股东、董监高信息
const enterprise_stockholder = (par)=> {
  var enterprise_stockholder_param = config.api_method.v1.enterprise_stockholder;
  enterprise_stockholder_param.data = par.data
  return wxRequest(enterprise_stockholder_param);
}

// 有利因素轮询
const enterprise_factor = (par)=> {
  var enterprise_factor_param = config.api_method.v1.enterprise_factor;
  enterprise_factor_param.data = par.data
  return wxRequest(enterprise_factor_param);
}

// 有利因素
const enterprise_moduledetail = (par)=> {
  var enterprise_moduledetail_param = config.api_method.v1.enterprise_moduledetail;
  enterprise_moduledetail_param.data = par.data
  return wxRequest(enterprise_moduledetail_param)
}

// 测试步骤
const test_step = (par)=> {
  var test_step_param = config.api_method.v1.test_step;
  test_step_param.data = par.data
  return wxRequest(test_step_param)
}

// 发送短信
const send_message = (par)=> {
  var send_message_param = config.api_method.v1.send_message;
  send_message_param.data = par.data
  return wxRequest(send_message_param);
}

// 短信验证
const message_take = (par)=> {
  var message_take_param = config.api_method.v1.message_take;
  message_take_param.data = par.data
  return wxRequest(message_take_param);
}

// 测试记录
const test_record = (par)=> {
  var test_record_param = config.api_method.v1.test_record;
  test_record_param.data = par.data
  return wxRequest(test_record_param);
}

// 详细报告
const detail_report = (par)=> {
  var detail_report_param = config.api_method.v1.detail_report;
  detail_report_param.data = par.data
  return wxRequest(detail_report_param);
}

// 测评记录
const evaluation_record = (par)=> {
  var evaluation_record_param = config.api_method.v1.evaluation_record;
  evaluation_record_param.data = par.data
  return wxRequest(evaluation_record_param);
}

// 记录中获取详细报告
const record_detail = (par)=> {
  var record_detail_param = config.api_method.v1.record_detail;
  record_detail_param.data = par.data
  return wxRequest(record_detail_param);
}

// 企业入驻数量
const business_num = (par)=> {
  var business_num_param = config.api_method.v1.business_num;
  business_num_param.data = par.data
  return wxRequest(business_num_param);
}
// 业务地理位置权限设置
const geographical_authority = (par)=> {
  var geographical_authority_param = config.api_method.v1.geographical_authority;
  geographical_authority_param.data = par.data
  return wxRequest(geographical_authority_param);
}

// 企业激活状态
const activation_state = ()=> {
  var activation_state_param = config.api_method.v1.activation_state;
  return wxRequest(activation_state_param);
}

// 激活企业
const activation_company = (par)=> {
  var activation_company_param = config.api_method.v1.activation_company;
  activation_company_param.data = par.data
  return wxRequest(activation_company_param);
}

// 申请展示
const apply_show = (par)=> {
  var apply_show_param = config.api_method.v1.apply_show;
  apply_show_param.data = par.data
  return wxRequest(apply_show_param);
}

// 信用修复
const credit_repair = (par)=> {
  var credit_repair_param = config.api_method.v1.credit_repair;
  credit_repair_param.data = par.data
  return wxRequest(credit_repair_param);
}

// 信用融资
const credit_financing = (par)=> {
  var credit_financing_param = config.api_method.v1.credit_financing;
  credit_financing_param.data = par.data
  return wxRequest(credit_financing_param);
}

// 申请试用
const apply_trial = (par)=> {
  var apply_trial_param = config.api_method.v1.apply_trial;
  apply_trial_param.data = par.data
  return wxRequest(apply_trial_param);
}

// 激活后默认用户数据
const financing_data = ()=> {
  var financing_data_param = config.api_method.v1.financing_data;
  return wxRequest(financing_data_param);
}

export default {
  login,
  login_userinfo,
  credit_headline,
  enterprise_search,
  enterprise_detial,
  enterprise_stockholder,
  enterprise_factor,
  enterprise_moduledetail,
  send_message,
  test_step,
  message_take,
  test_record,
  detail_report,
  evaluation_record,
  record_detail,
  business_num,
  geographical_authority,
  activation_state,
  activation_company,
  apply_show,
  credit_repair,
  credit_financing,
  apply_trial,
  financing_data
}
