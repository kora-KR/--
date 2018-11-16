module.exports = {
  baseApi_prod: "https://service.***.com/",              //生产环境
  baseApi_dev: "https://service.***.cn/",                //开发环境
  baseApi_test: "https://service.***.cn/o",              //测试环境,
  baseApi_debug: "10.86.11.130:8080/",                   //调试环境
  app_id: "",                                            //本地程序的appid
  wechat_app_id: "",                                     //微信的appid
  no_login: ['x315.miniprogram.login'],
  static_url: {                                          //静态文件地址
    static_base_v1: img_url(),                           //微信小程序地址版本为v1
  },
  //所有的接口
  api_method: {
    v1: {
      //登录
      login: {
        "method": "x315.miniprogram.login",
        "version": '1.0',
        "data": {}
      },
      getUserInfo:{
        "method": "x315.miniprogram.userinfo",
        "version": '1.0',
        "data": {}
      },
      //首页
      homeInfo:{
        "method": "x315.miniprogram.home",
        "version": '1.0',
        "data": {}
      },
      //催欠款首页
      arrears_index:{
        "method": "x315.arrears.index",
        "version": '1.0',
        "data": {}
      },
      //催欠款提交需求
      arrears_demand:{
        "method": "x315.arrears.arrearsDemand",
        "version": '1.0',
        "data": {}
      },
      // 催欠款列表
      arrears_list: {
        "method": "x315.arrears.arrearsDemandList",
        "version": '1.0',
        "data": {}
      },
      // 催欠款详细
      arrears_detail: {
        "method": "x315.arrears.arrearsDemandDetail",
        "version": '1.0',
        "data": {}
      },
      // 企业详细
      enterprise_detail:{
        "method": "x315.enterpriseInformation.detail",
        "version": '1.0',
        "data": {}
      },
      // 企业因素加载
      enterprise_factor: {
        "method": "x315.enterpriseInformation.scanfavourable",
        "version": '1.0',
        "data": {}
      },
      //企业搜索
      enterprise_search:{
        "method": "x315.enterpriseInformation.search",
        "version": '1.0',
        "data": {}
      },
      //股东-股东,董监局
      enterprise_stockholder:{
         "method": "x315.enterpriseInformation.stockholder",
         "version": '1.0',
         "data": {}
       },
      //企业背景
      enterprise_cb: {
         "method": "x315.enterpriseInformation.cb",
         "version": '1.0',
         "data": {}
       },
      //企业模块icon 详细
      enterprise_moduledetail:{
         "method": "x315.enterpriseInformation.moduledetail",
         "version": '1.0',
         "data": {}
       },
      //融资申请
      financing_demand:{
         "method": "x315.financing.demand",
         "version": '1.0',
         "data": {}
       },
      //融资信贷首页
      financing_index: {
         "method": "x315.financing.index",
         "version": '1.0',
         "data": {}
       },
      // 融资需求详细
      financing_detail: {
         "method": "x315.financing.demandDetail",
         "version": '1.0',
         "data": {}
       },
      // 批量获取评分评级
      enterprise_collectionofinformation_batchratingrating:{
         "method": "x315.collectionofinformation.batchratingrating",
         "version": '1.0',
         "data": {}
       },
      // 数据定制view
      credit_view: {
         "method": "x315.customized.view",
         "version": '1.0',
         "data": {}
       },
      // 数据定制提交
      credit_raiders: {
         "method": "x315.customized.enterprise",
         "version": '1.0',
         "data": {}
       },
      // 资讯头条
      credit_headline: {
         "method": "x315.arrears.infoList",
         "version": "1.0",
         "data": {}
       },
      // 发送短信
      send_message: {
        "method": "x315.verification.code",
        "version": "1.0",
        "data": {}
      },
      // 短信验证
      message_take: {
        "method": "x315.verification.checkVerifyingCode",
        "version": "1.0",
        "data": {}
      },
      // 测试步骤
      test_step: {
        "method": "x315.financingAssessmentProblem.problem",
        "version": "1.0",
        "data": {}
      },
      // 测试记录
      test_record: {
        'method': 'x315.evaluationRecord.saveorupdate',
        "version": "1.0",
        "data": {}
      },
      // 详细报告
      detail_report: {
        'method': 'x315.evaluationRecord.result',
        "version": "1.0",
        "data": {}
      },
      // 测评记录
      evaluation_record: {
        'method': 'x315.evaluationRecord.list',
        "version": "1.0",
        "data": {}
      },
      // 记录中获取详细报告
      record_detail: {
        'method': 'x315.evaluationRecord.result',
        "version": "1.0",
        "data": {}
      },
      // 企业入驻数量
      business_num: {
        'method': 'x315.evaluationEnterprise.num',
        "version": "1.0",
        "data": {}
      },
      // 业务地理位置权限设置
      geographical_authority: {
        'method': 'x315.enterpriseInformation.financingDetail',
        "version": "1.0",
        "data": {}
      },
      activation_state: {
        'method': 'x315.activeOrgApply.activationState',
        "version": "1.0",
        "data": {}
      },
      // 激活企业
      activation_company: {
        'method': 'x315.activeOrgApply.apply',
        "version": "1.0",
        "data": {}
      },
      // 申请展示
      apply_show: {
        'method': 'x315.apply.exhibition',
        "version": "1.0",
        "data": {}
      },
      // 信用修复
      credit_repair: {
        'method': 'x315.credit.repair',
        "version": "1.0",
        "data": {}
      },
      // 信用融资
      credit_financing: {
        'method': 'x315.apply.financing',
        "version": "1.0",
        "data": {}
      },
      // 申请试用
      apply_trial: {
        'method': 'x315.apply.trial',
        "version": "1.0",
        "data": {}
      },
      // 激活后默认用户数据
      financing_data: {
        'method': 'x315.activeOrgApply.findEnterprise',
        "version": "1.0",
        "data": {}
      }
    }
  }
}

function img_url() {
  var env = wx.getStorageSync("env");
  if (env) {
    if (env == 'test' || env == 'dev' || env == 'debug') {
      // 测试环境
      return "https://resource.so315.cn/smarprogram/miniwc/wch/v1/";
    } else {
      return "https://resource.x315.com/smarprogram/miniwc/wch/v1/";
    }
  } else {
    return "https://resource.x315.com/smarprogram/miniwc/wch/v1/";
  }
}
