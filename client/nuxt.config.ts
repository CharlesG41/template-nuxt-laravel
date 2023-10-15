// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    i18n: {
        defaultLocale: 'fr',
        strategy: 'prefix_except_default',
        locales: [
            {
                code: 'fr',
                name: 'Français'
            },
            {
                code: 'en',
                name: 'English'
            }
        ],
        parsePages: false,
        pages: {
            contact: {
                en: '/contact-us',
                fr: '/contactez-nous', 
            }
        }
    },
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
        },
    },
    css: [
        '~/assets/css/main.css'
    ]
})
