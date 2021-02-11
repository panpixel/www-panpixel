import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _885a2376 = () => interopDefault(import('..\\pages\\filmowanie.vue' /* webpackChunkName: "pages/filmowanie" */))
const _e9a08c88 = () => interopDefault(import('..\\pages\\fotografia.vue' /* webpackChunkName: "pages/fotografia" */))
const _6342dd00 = () => interopDefault(import('..\\pages\\kontakt.vue' /* webpackChunkName: "pages/kontakt" */))
const _1efdbda2 = () => interopDefault(import('..\\pages\\o-nas.vue' /* webpackChunkName: "pages/o-nas" */))
const _928077a6 = () => interopDefault(import('..\\pages\\projektowanie-stron-internetowych.vue' /* webpackChunkName: "pages/projektowanie-stron-internetowych" */))
const _6d8a6cfc = () => interopDefault(import('..\\pages\\realizacje.vue' /* webpackChunkName: "pages/realizacje" */))
const _1080060d = () => interopDefault(import('..\\pages\\services-list.vue' /* webpackChunkName: "pages/services-list" */))
const _bb770364 = () => interopDefault(import('..\\pages\\services-modern.vue' /* webpackChunkName: "pages/services-modern" */))
const _69e7aafa = () => interopDefault(import('..\\pages\\wideomarketing.vue' /* webpackChunkName: "pages/wideomarketing" */))
const _385448db = () => interopDefault(import('..\\pages\\blog\\5-sposobow-na-film-reklamowy.vue' /* webpackChunkName: "pages/blog/5-sposobow-na-film-reklamowy" */))
const _bcd9a810 = () => interopDefault(import('..\\pages\\blog\\blog-creative.vue' /* webpackChunkName: "pages/blog/blog-creative" */))
const _4683d089 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _25e053d4 = () => interopDefault(import('..\\pages\\blog\\blog-details-modern-layout.vue' /* webpackChunkName: "pages/blog/blog-details-modern-layout" */))
const _943ca258 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic.vue' /* webpackChunkName: "pages/blog/blog-grid-classic" */))
const _2e69c8f1 = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic copy.vue' /* webpackChunkName: "pages/blog/blog-grid-classic copy" */))
const _aa727c3a = () => interopDefault(import('..\\pages\\blog\\blog-grid-classic-sidebar.vue' /* webpackChunkName: "pages/blog/blog-grid-classic-sidebar" */))
const _a3a7b0fa = () => interopDefault(import('..\\pages\\blog\\blog-grid-mesonry.vue' /* webpackChunkName: "pages/blog/blog-grid-mesonry" */))
const _4fd6373a = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal" */))
const _ab7fdb50 = () => interopDefault(import('..\\pages\\blog\\blog-grid-minimal-outline.vue' /* webpackChunkName: "pages/blog/blog-grid-minimal-outline" */))
const _4439dc4d = () => interopDefault(import('..\\pages\\blog\\blog-grid-modern.vue' /* webpackChunkName: "pages/blog/blog-grid-modern" */))
const _666b2160 = () => interopDefault(import('..\\pages\\blog\\blog-grid-simple.vue' /* webpackChunkName: "pages/blog/blog-grid-simple" */))
const _bb69392a = () => interopDefault(import('..\\pages\\blog\\blog-grid-standard.vue' /* webpackChunkName: "pages/blog/blog-grid-standard" */))
const _493daa96 = () => interopDefault(import('..\\pages\\blog\\blog-standard-list.vue' /* webpackChunkName: "pages/blog/blog-standard-list" */))
const _b1b791c8 = () => interopDefault(import('..\\pages\\blog\\wideomarketing.vue' /* webpackChunkName: "pages/blog/wideomarketing" */))
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
const _442de44d = () => interopDefault(import('..\\pages\\filmy-reklamowe\\instalacje-przemyslowe-talmex.vue' /* webpackChunkName: "pages/filmy-reklamowe/instalacje-przemyslowe-talmex" */))
const _764f4f60 = () => interopDefault(import('..\\pages\\filmy-reklamowe\\instytut-lukasiewicza.vue' /* webpackChunkName: "pages/filmy-reklamowe/instytut-lukasiewicza" */))
const _38603dfc = () => interopDefault(import('..\\pages\\filmy-reklamowe\\klimatyzacja-wentylacja-ventixserwis.vue' /* webpackChunkName: "pages/filmy-reklamowe/klimatyzacja-wentylacja-ventixserwis" */))
const _28627770 = () => interopDefault(import('..\\pages\\filmy-reklamowe\\portfolio-details.vue' /* webpackChunkName: "pages/filmy-reklamowe/portfolio-details" */))
const _4888bc6d = () => interopDefault(import('..\\pages\\filmy-reklamowe\\produkcja-kanalow-wentylacyjnych-sanen.vue' /* webpackChunkName: "pages/filmy-reklamowe/produkcja-kanalow-wentylacyjnych-sanen" */))
const _25192038 = () => interopDefault(import('..\\pages\\filmy-reklamowe\\um-jaworzno.vue' /* webpackChunkName: "pages/filmy-reklamowe/um-jaworzno" */))
const _1a717648 = () => interopDefault(import('..\\pages\\filmy-reklamowe\\zespol-lecznictwa-otwartego.vue' /* webpackChunkName: "pages/filmy-reklamowe/zespol-lecznictwa-otwartego" */))
const _023f5250 = () => interopDefault(import('..\\pages\\fotografia-reklamowa\\fornit.vue' /* webpackChunkName: "pages/fotografia-reklamowa/fornit" */))
const _16e420cc = () => interopDefault(import('..\\pages\\fotografia-reklamowa\\ventix.vue' /* webpackChunkName: "pages/fotografia-reklamowa/ventix" */))
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
const _940bda28 = () => interopDefault(import('..\\pages\\portfolio\\portfolio-with-caption.vue' /* webpackChunkName: "pages/portfolio/portfolio-with-caption" */))
const _4d6de958 = () => interopDefault(import('..\\pages\\portfolio\\realizacje.vue' /* webpackChunkName: "pages/portfolio/realizacje" */))
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
    path: "/filmowanie",
    component: _885a2376,
    name: "filmowanie"
  }, {
    path: "/fotografia",
    component: _e9a08c88,
    name: "fotografia"
  }, {
    path: "/kontakt",
    component: _6342dd00,
    name: "kontakt"
  }, {
    path: "/o-nas",
    component: _1efdbda2,
    name: "o-nas"
  }, {
    path: "/projektowanie-stron-internetowych",
    component: _928077a6,
    name: "projektowanie-stron-internetowych"
  }, {
    path: "/realizacje",
    component: _6d8a6cfc,
    name: "realizacje"
  }, {
    path: "/services-list",
    component: _1080060d,
    name: "services-list"
  }, {
    path: "/services-modern",
    component: _bb770364,
    name: "services-modern"
  }, {
    path: "/wideomarketing",
    component: _69e7aafa,
    name: "wideomarketing"
  }, {
    path: "/blog/5-sposobow-na-film-reklamowy",
    component: _385448db,
    name: "blog-5-sposobow-na-film-reklamowy"
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
    path: "/blog/blog-grid-classic copy",
    component: _2e69c8f1,
    name: "blog-blog-grid-classic copy"
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
    path: "/blog/wideomarketing",
    component: _b1b791c8,
    name: "blog-wideomarketing"
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
    path: "/filmy-reklamowe/instalacje-przemyslowe-talmex",
    component: _442de44d,
    name: "filmy-reklamowe-instalacje-przemyslowe-talmex"
  }, {
    path: "/filmy-reklamowe/instytut-lukasiewicza",
    component: _764f4f60,
    name: "filmy-reklamowe-instytut-lukasiewicza"
  }, {
    path: "/filmy-reklamowe/klimatyzacja-wentylacja-ventixserwis",
    component: _38603dfc,
    name: "filmy-reklamowe-klimatyzacja-wentylacja-ventixserwis"
  }, {
    path: "/filmy-reklamowe/portfolio-details",
    component: _28627770,
    name: "filmy-reklamowe-portfolio-details"
  }, {
    path: "/filmy-reklamowe/produkcja-kanalow-wentylacyjnych-sanen",
    component: _4888bc6d,
    name: "filmy-reklamowe-produkcja-kanalow-wentylacyjnych-sanen"
  }, {
    path: "/filmy-reklamowe/um-jaworzno",
    component: _25192038,
    name: "filmy-reklamowe-um-jaworzno"
  }, {
    path: "/filmy-reklamowe/zespol-lecznictwa-otwartego",
    component: _1a717648,
    name: "filmy-reklamowe-zespol-lecznictwa-otwartego"
  }, {
    path: "/fotografia-reklamowa/fornit",
    component: _023f5250,
    name: "fotografia-reklamowa-fornit"
  }, {
    path: "/fotografia-reklamowa/ventix",
    component: _16e420cc,
    name: "fotografia-reklamowa-ventix"
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
    path: "/portfolio/portfolio-with-caption",
    component: _940bda28,
    name: "portfolio-portfolio-with-caption"
  }, {
    path: "/portfolio/realizacje",
    component: _4d6de958,
    name: "portfolio-realizacje"
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
