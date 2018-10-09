'use strict';
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1539066813520_3048';

  // add your config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.nj': 'nunjucks'
    },
    defaultViewEngine: 'nunjucks'
  }

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'fuck1991',
      // 数据库名
      database: 'PxBook',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  }
  return config;
};
