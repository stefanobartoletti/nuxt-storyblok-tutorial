import {
    defineNuxtConfig
} from 'nuxt'

export default defineNuxtConfig({
    css: ['@/assets/css/roboto.css'],
    modules: [
        ['@storyblok/nuxt', {
            accessToken: 'fPqJibIQtxUPwEdhpW11KAtt'
        }],
        '@nuxtjs/tailwindcss',
    ],
})