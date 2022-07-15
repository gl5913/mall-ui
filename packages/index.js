import Login from "./login/login.vue"

const components = [
	Login
]

const install = function (Vue) {
	// 全局注册组件
	components.forEach(item => {
		Vue.component(item.name, item)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install
}