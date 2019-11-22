/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1574148545764_4759';

  // add your middleware config here
  config.middleware = [];

  config.redis = {
    client: {
      host: 'redis',
      port: '6379',
      password: '',
      db: '0'
    }
  }

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: 'mysql',
      // 端口号
      port: '3306',
      // 用户名
      user: 'default_user',
      // 密码
      password: '12345678',
      // 数据库名
      database: 'default_database',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
