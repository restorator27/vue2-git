export default {
  mode: "universal",
  // Global page headers: https://go.nuxtjs.dev/config-head
  // базовые теги для html который сгенерится
  // путь / указывает на папку static
  head: {
    title: 'my-nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // поле для индикатора загрузки
  loading: { color: "coral" },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  // так подключаются сторонние модули
  modules: [
    "@nuxtjs/axios"
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
