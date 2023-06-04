// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nazarii Semeniuk | Full Stack Developer',
            meta: [
                { name: 'og:title', content: 'Nazarii Semeniuk | Full Stack Developer' },
                { name: 'description', content: 'Nazarii Semeniuk - proffessional full stack developer with more than 4 years of total developemnt experience.' },
                { name: 'og:description', content: 'Nazarii Semeniuk - proffessional full stack developer with more than 4 years of total developemnt experience.' }
            ]
        }
    },
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL,
            WEBSITE_URL: process.env.WEBSITE_URL
        }
    },
    css: [
        '@/assets/styles/styles.scss'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";'
                }
            }
        }
    }
})
