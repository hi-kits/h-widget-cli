// 请求 fs-extra 库
const fse = require('fs-extra');

const path = require('path');

// 声明配置文件默认内容
const jsonConfig = {
  "name": "h-widget-cli",
  "mirror": "https://github.com/hi-kits/parceltemplate/archive/refs/heads/master.zip"
}

// 拼接 config.json 完整路径
const configPath = path.resolve(__dirname, '../config.json');

async function defConfig() {
  try {
    // 利用fs-extra 封装的方法，将jsonConfig 内容保存为 json 文件
    await fse.outputJSON(configPath, jsonConfig);
  } catch (err) {
    console.error(err);
    process.exit();
  }
}

// 将上面的 defConfig() 方法导出
module.exports = defConfig;