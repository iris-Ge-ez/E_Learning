export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'e-learning',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "css/bootstrap.css" },
      { rel: "stylesheet", href: "css/font-awesome.css" },
      { rel: "stylesheet", href: "css/flaticon.css" },
      { rel: "stylesheet", href: "css/slick-slider.css" },
      { rel: "stylesheet", href: "css/prettyphoto.css" },
      { rel: "stylesheet", href: "style.css" },
      { rel: "stylesheet", href: "css/color.css" },
      { rel: "stylesheet", href: "css/color-two.css" },
      { rel: "stylesheet", href: "css/color-three.css" },
      { rel: "stylesheet", href: "css/color-four.css" },
      { rel: "stylesheet", href: "css/responsive.css" },
      { rel: "stylesheet", href: "build/mediaelementplayer.css" },
     
      
      ],

      script:[
           { src: "script/jquery.js" },
           { src: "script/modernizr.js" },
           { src: "script/bootstrap.min.js" },
           { src: "script/jquery.prettyphoto.js" },
           { src: "script/jquery.countdown.min.js" },
           { src: "script/fitvideo.js" },
           { src: "script/skills.js" },
           { src: "script/slick.slider.min.js" },
           { src: "script/waypoints-min.js" },
           { src: "build/mediaelement-and-player.min.js" },
           { src: "script/isotope.min.js" },
           { src: "script/jquery.nicescroll.min.js" },
           { src: "https://maps.googleapis.com/maps/api/js" },
           { src: "script/functions.js" },
           
         ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
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
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}