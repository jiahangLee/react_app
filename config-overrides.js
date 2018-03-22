/**
 * Created by jiahang Lee on 2018/3/22.
 */
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
       config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    return config;
};