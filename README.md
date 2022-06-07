## cli

### Node 中如何优雅解析命令行参数

当一个 Node 程序运行时，process 对象中会有一个 argv 属性用于获取命令行参数，首先定义一个脚本打印一下 process.argv 属性。


当然我们可以手动解析这些参数，但是其实对于命令行参数有多种风格，参考 https://juejin.cn/post/6915200398512881672#heading-1。
简单举下例子：
 Unix 风格：参数以「-」（连字符）开头  

例如： -s=4 -d=22
 GNU 风格：参数以「--」（双连字符）开头  

例如： --ships=4 --distance=22
 BSD 风格：参数以空格分割  

例如： --ships 12 --distance 98.7

### package.json：

指定 package.json 中 bin 字段（关于 bin 字段 https://github.com/liujunyang/deep-webpack/issues/2）

然后执行 npm link 链接到全局即可使用 cli 命令来执行 index.js 文件。

npm-link文档：https://docs.npmjs.com/cli/v8/commands/npm-link

