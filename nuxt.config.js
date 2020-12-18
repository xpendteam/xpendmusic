import axios from 'axios'
import getRoutes from "./utils/getRoutes";
export default {
	generate: {
		routes() {
			return axios.get('https://cdn.xpendmusic.com/api/list_index/').then(res => {
				return res.data.map(key => {
					return key.id
				})
			})
		}
	},
	// Target (https://go.nuxtjs.dev/config-target)
	target: 'static',

	// Global page headers (https://go.nuxtjs.dev/config-head)
	head: {
		title: 'xpendmusic',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		script: [
			{
				src: "https://kit.fontawesome.com/31ef3d53d0.js",
			},
			{
				src: "https://cdn.jsdelivr.net/npm/fuse.js@6.4.3",
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: "stylesheet",
				href:
					"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
			},
			{
				rel: "stylesheet",
				href:
					"https://cdn.jsdelivr.net/npm/ascendcss@1.0.3/dist/css/ascend.min.css",
			},
		]
	},

	loading: {
		color: '#fff',
		height: '3px'
	},

	// Global CSS (https://go.nuxtjs.dev/config-css)
	css: [
	],

	// Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
	plugins: [
		'~/plugins/lazyload'
	],

	// Auto import components (https://go.nuxtjs.dev/config-components)
	components: true,

	// Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
	buildModules: [
		'@nuxtjs/moment',
	],

	moment: {
		defaultLocale: 'es',
		locales: ['es']
	},

	// Modules (https://go.nuxtjs.dev/config-modules)
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxt/content',
		'@nuxtjs/sitemap'
	],

	sitemap: {
		hostname: 'https://xpendmusic.com',
		routes() {
			return getRoutes();
		},
	},
	googleAnalytics: {
		id: 'UA-167348549-1'
	},

	pwa: {
		manifest: {
			short_name: "Xpend Music",
			name: 'Xpend Music',
			background_color: '#1a1b1e',
			lang: 'es',
			description: "Sitio web de Xpend Music"
		},
		meta: {
			theme_color: '#1a1b1e',
			lang: 'es'
		},
		icon: {
			source: "./static/xpendmusic.png"
		},
	},

	// Axios module configuration (https://go.nuxtjs.dev/config-axios)
	axios: {},

	// Content module configuration (https://go.nuxtjs.dev/config-content)
	content: {},

	// Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {
	}
}
