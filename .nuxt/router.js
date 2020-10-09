import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00e5af30 = () => interopDefault(import('..\\pages\\about-us-01.vue' /* webpackChunkName: "pages/about-us-01" */))
const _0101de32 = () => interopDefault(import('..\\pages\\about-us-03.vue' /* webpackChunkName: "pages/about-us-03" */))
const _010ff5b3 = () => interopDefault(import('..\\pages\\about-us-04.vue' /* webpackChunkName: "pages/about-us-04" */))
const _6bf2f264 = () => interopDefault(import('..\\pages\\career.vue' /* webpackChunkName: "pages/career" */))
const _674b79be = () => interopDefault(import('..\\pages\\contact-us-modern.vue' /* webpackChunkName: "pages/contact-us-modern" */))
const _11c9f257 = () => interopDefault(import('..\\pages\\contact-us-with-map.vue' /* webpackChunkName: "pages/contact-us-with-map" */))
const _248f6fd8 = () => interopDefault(import('..\\pages\\home-authentic-studio.vue' /* webpackChunkName: "pages/home-authentic-studio" */))
const _1f746bf3 = () => interopDefault(import('..\\pages\\home-blog-grid.vue' /* webpackChunkName: "pages/home-blog-grid" */))
const _006918aa = () => interopDefault(import('..\\pages\\home-corona.vue' /* webpackChunkName: "pages/home-corona" */))
const _78d744c5 = () => interopDefault(import('..\\pages\\home-creative-agency.vue' /* webpackChunkName: "pages/home-creative-agency" */))
const _4ac53238 = () => interopDefault(import('..\\pages\\home-creative-portfolio.vue' /* webpackChunkName: "pages/home-creative-portfolio" */))
const _6ebfe9b2 = () => interopDefault(import('..\\pages\\home-design-studio.vue' /* webpackChunkName: "pages/home-design-studio" */))
const _b09bec30 = () => interopDefault(import('..\\pages\\home-digital-agency.vue' /* webpackChunkName: "pages/home-digital-agency" */))
const _e34b73a0 = () => interopDefault(import('..\\pages\\home-essential.vue' /* webpackChunkName: "pages/home-essential" */))
const _43c90c91 = () => interopDefault(import('..\\pages\\home-freelancer.vue' /* webpackChunkName: "pages/home-freelancer" */))
const _727818e6 = () => interopDefault(import('..\\pages\\home-fullscreen-slider-left-vertical-header.vue' /* webpackChunkName: "pages/home-fullscreen-slider-left-vertical-header" */))
const _1ffb9671 = () => interopDefault(import('..\\pages\\home-indie-musician.vue' /* webpackChunkName: "pages/home-indie-musician" */))
const _35b3caf9 = () => interopDefault(import('..\\pages\\home-landing.vue' /* webpackChunkName: "pages/home-landing" */))
const _49914da8 = () => interopDefault(import('..\\pages\\home-masonry-gallery.vue' /* webpackChunkName: "pages/home-masonry-gallery" */))
const _e280ea82 = () => interopDefault(import('..\\pages\\home-minimal-agency.vue' /* webpackChunkName: "pages/home-minimal-agency" */))
const _39fc5a98 = () => interopDefault(import('..\\pages\\home-minimal-metro-grid.vue' /* webpackChunkName: "pages/home-minimal-metro-grid" */))
const _a8a71c04 = () => interopDefault(import('..\\pages\\home-minimal-portfolio.vue' /* webpackChunkName: "pages/home-minimal-portfolio" */))
const _786277ef = () => interopDefault(import('..\\pages\\home-photo-slider-gallery.vue' /* webpackChunkName: "pages/home-photo-slider-gallery" */))
const _289bf54e = () => interopDefault(import('..\\pages\\home-portfolio-slide.vue' /* webpackChunkName: "pages/home-portfolio-slide" */))
const _e7a95dca = () => interopDefault(import('..\\pages\\home-product-landing.vue' /* webpackChunkName: "pages/home-product-landing" */))
const _3e05894b = () => interopDefault(import('..\\pages\\home-restaurant.vue' /* webpackChunkName: "pages/home-restaurant" */))
const _b5c04ed2 = () => interopDefault(import('..\\pages\\home-service.vue' /* webpackChunkName: "pages/home-service" */))
const _c98a7218 = () => interopDefault(import('..\\pages\\home-start-up.vue' /* webpackChunkName: "pages/home-start-up" */))
const _705a3990 = () => interopDefault(import('..\\pages\\home-vertical-menu.vue' /* webpackChunkName: "pages/home-vertical-menu" */))
const _77357003 = () => interopDefault(import('..\\pages\\pricing-plans.vue' /* webpackChunkName: "pages/pricing-plans" */))
const _192b4cf3 = () => interopDefault(import('..\\pages\\services-classic.vue' /* webpackChunkName: "pages/services-classic" */))
const _1080060d = () => interopDefault(import('..\\pages\\services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _bb770364 = () => interopDefault(import('..\\pages\\services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _ec642924 = () => interopDefault(import('..\\pages\\team-carousel-01.vue' /* webpackChunkName: "pages/team-carousel-01" */))
const _ec47fa22 = () => interopDefault(import('..\\pages\\team-carousel-02.vue' /* webpackChunkName: "pages/team-carousel-02" */))
const _9b3864d4 = () => interopDefault(import('..\\pages\\team-grid.vue' /* webpackChunkName: "pages/team-grid" */))
const _bcd9a810 = () => interopDefault(import('..\\pages\\blog\\blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _4683d089 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _25e053d4 = () => interopDefault(import('..\\pages\\blog\\blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _943ca258 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _aa727c3a = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _a3a7b0fa = () => interopDefault(import('..\\pages\\blog\\blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _4fd6373a = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _ab7fdb50 = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _4439dc4d = () => interopDefault(import('..\\pages\\blog\\blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _666b2160 = () => interopDefault(import('..\\pages\\blog\\blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _bb69392a = () => interopDefault(import('..\\pages\\blog\\blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _493daa96 = () => interopDefault(import('..\\pages\\blog\\blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _7b88acc8 = () => interopDefault(import('..\\pages\\element\\accordion.vue' /* webpackChunkName: "pages/element/accordion" */))
const _962ce7e6 = () => interopDefault(import('..\\pages\\element\\brand-logo.vue' /* webpackChunkName: "pages/element/brand-logo" */))
const _493be0b4 = () => interopDefault(import('..\\pages\\element\\call-to-action-banner.vue' /* webpackChunkName: "pages/element/call-to-action-banner" */))
const _464a1a42 = () => interopDefault(import('..\\pages\\element\\carousel-slider.vue' /* webpackChunkName: "pages/element/carousel-slider" */))
const _c4015c9e = () => interopDefault(import('..\\pages\\element\\contact-subscribe.vue' /* webpackChunkName: "pages/element/contact-subscribe" */))
const _43f678d6 = () => interopDefault(import('..\\pages\\element\\dividers.vue' /* webpackChunkName: "pages/element/dividers" */))
const _5b3c3c29 = () => interopDefault(import('..\\pages\\element\\flexible-image-slider.vue' /* webpackChunkName: "pages/element/flexible-image-slider" */))
const _6d66a38a = () => interopDefault(import('..\\pages\\element\\gradation.vue' /* webpackChunkName: "pages/element/gradation" */))
const _ca1ca17e = () => interopDefault(import('..\\pages\\element\\icon-boxes.vue' /* webpackChunkName: "pages/element/icon-boxes" */))
const _7c22b1f4 = () => interopDefault(import('..\\pages\\element\\instagram.vue' /* webpackChunkName: "pages/element/instagram" */))
const _7f3a9769 = () => interopDefault(import('..\\pages\\element\\lists.vue' /* webpackChunkName: "pages/element/lists" */))
const _10c6544e = () => interopDefault(import('..\\pages\\element\\message-box.vue' /* webpackChunkName: "pages/element/message-box" */))
const _2eea4698 = () => interopDefault(import('..\\pages\\element\\pricing-box.vue' /* webpackChunkName: "pages/element/pricing-box" */))
const _6644b269 = () => interopDefault(import('..\\pages\\element\\tab.vue' /* webpackChunkName: "pages/element/tab" */))
const _378cc339 = () => interopDefault(import('..\\pages\\element\\team.vue' /* webpackChunkName: "pages/element/team" */))
const _59c40673 = () => interopDefault(import('..\\pages\\element\\testimonial.vue' /* webpackChunkName: "pages/element/testimonial" */))
const _6bdf7548 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-ajax-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-ajax-filter" */))
const _40316ec5 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details.vue' /* webpackChunkName: "pages/portfolio/portfolio-details" */))
const _7b04176e = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-image-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-image-with-caption" */))
const _b781585e = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-left-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-left-wide" */))
const _37e70f94 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right" */))
const _db0ab8c8 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-details-right-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-details-right-wide" */))
const _341b0ea0 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-boxed.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-boxed" */))
const _70298862 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-filter.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-filter" */))
const _342f891f = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-01.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-01" */))
const _344bb821 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-metro-03.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-metro-03" */))
const _be3a9a86 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-grid-wide.vue' /* webpackChunkName: "pages/portfolio/portfolio-grid-wide" */))
const _940bda28 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _629f0bb8 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _08a9e09c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active-link',
  scrollBehavior,

  routes: [{
    path: "/about-us-01",
    component: _00e5af30,
    name: "about-us-01"
  }, {
    path: "/about-us-03",
    component: _0101de32,
    name: "about-us-03"
  }, {
    path: "/about-us-04",
    component: _010ff5b3,
    name: "about-us-04"
  }, {
    path: "/career",
    component: _6bf2f264,
    name: "career"
  }, {
    path: "/contact-us-modern",
    component: _674b79be,
    name: "contact-us-modern"
  }, {
    path: "/contact-us-with-map",
    component: _11c9f257,
    name: "contact-us-with-map"
  }, {
    path: "/home-authentic-studio",
    component: _248f6fd8,
    name: "home-authentic-studio"
  }, {
    path: "/home-blog-grid",
    component: _1f746bf3,
    name: "home-blog-grid"
  }, {
    path: "/home-corona",
    component: _006918aa,
    name: "home-corona"
  }, {
    path: "/home-creative-agency",
    component: _78d744c5,
    name: "home-creative-agency"
  }, {
    path: "/home-creative-portfolio",
    component: _4ac53238,
    name: "home-creative-portfolio"
  }, {
    path: "/home-design-studio",
    component: _6ebfe9b2,
    name: "home-design-studio"
  }, {
    path: "/home-digital-agency",
    component: _b09bec30,
    name: "home-digital-agency"
  }, {
    path: "/home-essential",
    component: _e34b73a0,
    name: "home-essential"
  }, {
    path: "/home-freelancer",
    component: _43c90c91,
    name: "home-freelancer"
  }, {
    path: "/home-fullscreen-slider-left-vertical-header",
    component: _727818e6,
    name: "home-fullscreen-slider-left-vertical-header"
  }, {
    path: "/home-indie-musician",
    component: _1ffb9671,
    name: "home-indie-musician"
  }, {
    path: "/home-landing",
    component: _35b3caf9,
    name: "home-landing"
  }, {
    path: "/home-masonry-gallery",
    component: _49914da8,
    name: "home-masonry-gallery"
  }, {
    path: "/home-minimal-agency",
    component: _e280ea82,
    name: "home-minimal-agency"
  }, {
    path: "/home-minimal-metro-grid",
    component: _39fc5a98,
    name: "home-minimal-metro-grid"
  }, {
    path: "/home-minimal-portfolio",
    component: _a8a71c04,
    name: "home-minimal-portfolio"
  }, {
    path: "/home-photo-slider-gallery",
    component: _786277ef,
    name: "home-photo-slider-gallery"
  }, {
    path: "/home-portfolio-slide",
    component: _289bf54e,
    name: "home-portfolio-slide"
  }, {
    path: "/home-product-landing",
    component: _e7a95dca,
    name: "home-product-landing"
  }, {
    path: "/home-restaurant",
    component: _3e05894b,
    name: "home-restaurant"
  }, {
    path: "/home-service",
    component: _b5c04ed2,
    name: "home-service"
  }, {
    path: "/home-start-up",
    component: _c98a7218,
    name: "home-start-up"
  }, {
    path: "/home-vertical-menu",
    component: _705a3990,
    name: "home-vertical-menu"
  }, {
    path: "/pricing-plans",
    component: _77357003,
    name: "pricing-plans"
  }, {
    path: "/services-classic",
    component: _192b4cf3,
    name: "services-classic"
  }, {
    path: "/services-list",
    component: _1080060d,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _bb770364,
    name: "services-modern"
  }, {
    path: "/team-carousel-01",
    component: _ec642924,
    name: "team-carousel-01"
  }, {
    path: "/team-carousel-02",
    component: _ec47fa22,
    name: "team-carousel-02"
  }, {
    path: "/team-grid",
    component: _9b3864d4,
    name: "team-grid"
  }, {
    path: "/blog/blog-creative",
    component: _bcd9a810,
    name: "blog-blog-creative"
  }, {
    path: "/blog/blog-details",
    component: _4683d089,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-details-modern-layout",
    component: _25e053d4,
    name: "blog-blog-details-modern-layout"
  }, {
    path: "/blog/blog-grid-classic",
    component: _943ca258,
    name: "blog-blog-grid-classic"
  }, {
    path: "/blog/blog-grid-classic-sidebar",
    component: _aa727c3a,
    name: "blog-blog-grid-classic-sidebar"
  }, {
    path: "/blog/blog-grid-mesonry",
    component: _a3a7b0fa,
    name: "blog-blog-grid-mesonry"
  }, {
    path: "/blog/blog-grid-minimal",
    component: _4fd6373a,
    name: "blog-blog-grid-minimal"
  }, {
    path: "/blog/blog-grid-minimal-outline",
    component: _ab7fdb50,
    name: "blog-blog-grid-minimal-outline"
  }, {
    path: "/blog/blog-grid-modern",
    component: _4439dc4d,
    name: "blog-blog-grid-modern"
  }, {
    path: "/blog/blog-grid-simple",
    component: _666b2160,
    name: "blog-blog-grid-simple"
  }, {
    path: "/blog/blog-grid-standard",
    component: _bb69392a,
    name: "blog-blog-grid-standard"
  }, {
    path: "/blog/blog-standard-list",
    component: _493daa96,
    name: "blog-blog-standard-list"
  }, {
    path: "/element/accordion",
    component: _7b88acc8,
    name: "element-accordion"
  }, {
    path: "/element/brand-logo",
    component: _962ce7e6,
    name: "element-brand-logo"
  }, {
    path: "/element/call-to-action-banner",
    component: _493be0b4,
    name: "element-call-to-action-banner"
  }, {
    path: "/element/carousel-slider",
    component: _464a1a42,
    name: "element-carousel-slider"
  }, {
    path: "/element/contact-subscribe",
    component: _c4015c9e,
    name: "element-contact-subscribe"
  }, {
    path: "/element/dividers",
    component: _43f678d6,
    name: "element-dividers"
  }, {
    path: "/element/flexible-image-slider",
    component: _5b3c3c29,
    name: "element-flexible-image-slider"
  }, {
    path: "/element/gradation",
    component: _6d66a38a,
    name: "element-gradation"
  }, {
    path: "/element/icon-boxes",
    component: _ca1ca17e,
    name: "element-icon-boxes"
  }, {
    path: "/element/instagram",
    component: _7c22b1f4,
    name: "element-instagram"
  }, {
    path: "/element/lists",
    component: _7f3a9769,
    name: "element-lists"
  }, {
    path: "/element/message-box",
    component: _10c6544e,
    name: "element-message-box"
  }, {
    path: "/element/pricing-box",
    component: _2eea4698,
    name: "element-pricing-box"
  }, {
    path: "/element/tab",
    component: _6644b269,
    name: "element-tab"
  }, {
    path: "/element/team",
    component: _378cc339,
    name: "element-team"
  }, {
    path: "/element/testimonial",
    component: _59c40673,
    name: "element-testimonial"
  }, {
    path: "/portfolio/portfolio-ajax-filter",
    component: _6bdf7548,
    name: "portfolio-portfolio-ajax-filter"
  }, {
    path: "/portfolio/portfolio-details",
    component: _40316ec5,
    name: "portfolio-portfolio-details"
  }, {
    path: "/portfolio/portfolio-details-image-with-caption",
    component: _7b04176e,
    name: "portfolio-portfolio-details-image-with-caption"
  }, {
    path: "/portfolio/portfolio-details-left-wide",
    component: _b781585e,
    name: "portfolio-portfolio-details-left-wide"
  }, {
    path: "/portfolio/portfolio-details-right",
    component: _37e70f94,
    name: "portfolio-portfolio-details-right"
  }, {
    path: "/portfolio/portfolio-details-right-wide",
    component: _db0ab8c8,
    name: "portfolio-portfolio-details-right-wide"
  }, {
    path: "/portfolio/portfolio-grid-boxed",
    component: _341b0ea0,
    name: "portfolio-portfolio-grid-boxed"
  }, {
    path: "/portfolio/portfolio-grid-filter",
    component: _70298862,
    name: "portfolio-portfolio-grid-filter"
  }, {
    path: "/portfolio/portfolio-grid-metro-01",
    component: _342f891f,
    name: "portfolio-portfolio-grid-metro-01"
  }, {
    path: "/portfolio/portfolio-grid-metro-03",
    component: _344bb821,
    name: "portfolio-portfolio-grid-metro-03"
  }, {
    path: "/portfolio/portfolio-grid-wide",
    component: _be3a9a86,
    name: "portfolio-portfolio-grid-wide"
  }, {
    path: "/portfolio/portfolio-with-caption",
    component: _940bda28,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/blog/:id?",
    component: _629f0bb8,
    name: "blog-id"
  }, {
    path: "/",
    component: _08a9e09c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
