export default {
    mode: 'universal',
    // subdirectory: '/1/brook',

    generate: {
        fallback: true
    },

    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || 'Vue.JS Technology',
        htmlAttrs: {
            lang: 'pl'
          },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
            {
                hid: 'og:type',
                property: 'og:type',
                content: 'website'
              },
              {
                hid: 'og:title',
                property: 'og:title',
                content: 'Filmy reklamowe ⋆ Wirtualny spacer ⋆ Tworzenie stron WWW'
              },
              {
                hid: 'og:description',
                property: 'og:description',
                content: 'Za pomocą obrazu i dźwięku wzbogaconego o odpowiedni tekst, skutecznie docieramy do określonej grupy odbiorców. Tworzymy filmy reklamowe'
              },
              {
                hid: 'og:image',
                property: 'og:image',
                content: 'https://www.panpixel.studio/img/slider/film-reklamowy-dla-biznesu.jpg' // the size has to be more 200px at least 
              },
              {
                hid: 'og:url',
                property: 'og:url',
                content: 'https://www.panpixel.studio/'
              },
              {
                hid: 'og:site_name',
                property: 'og:site_name',
                content: 'panpixel.studio'
              },
              {
                hid: 'og:locale',
                property: 'og:locale',
                content: 'pl'
              },
              {
                hid: 'og:image:type',
                property: 'og:image:type',
                content: 'image/jpeg'
              },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        'assets/scss/style.scss',
    ],

    router: {
        linkExactActiveClass: 'active-link',
        // base: '/1/brook'
    },
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-paginate.js',
        '~/plugins/vue2-google-maps.js',
        '~/plugins/silentbox.js',
        { src:'~/plugins/ga.js', ssr: false },
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],

    styleResources: {
        scss: [
            'assets/scss/default/_variables.scss'
        ]
    },

    /*
    ** Build configuration
    */
    build: {
        babel: {
            compact: true
          },
        extractCSS: true,
        /*
        ** You can extend webpack config here
        */
        extend (config, ctx) {
        },
        transpile: [/^vue2-google-maps($|\/)/]
    },
}
