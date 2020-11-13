export default {
    css: [
        // CSS file in the project
        '~/assets/css/main.css'
    ],
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt'
    ],
    components: true,
    server: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    }
}