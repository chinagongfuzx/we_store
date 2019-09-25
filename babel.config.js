const productionPlugins = [] // 发布阶段用到的babel插件
if (process.env.NODE_ENV === 'production') {

	// 如果项目在生产阶段，则使用 babel-plugin-transform-remove-console 去页面中的console
	productionPlugins.push('transform-remove-console')
}

module.exports = {
	presets: [
		'@vue/app'
	],
	plugins: [

		// 使用 @babel/plugin-syntax-dynamic-import 插件实现路由懒加载
		'@babel/plugin-syntax-dynamic-import',
		...productionPlugins // 解构数组，开发阶段得到空，生产阶段得到'transform-remove-console'
	]
}
