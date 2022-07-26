import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2ff4249d = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _2250181a = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _21993380 = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages_checkout" */))
const _2cdb0b79 = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages_success" */))
const _8a7cf1d2 = () => interopDefault(import('..\\pages\\my\\orders\\index.vue' /* webpackChunkName: "pages_my_orders_index" */))
const _96a5fd1a = () => interopDefault(import('..\\pages\\my\\profile.vue' /* webpackChunkName: "pages_my_profile" */))
const _25021770 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _2ff4249d,
    name: "admin"
  }, {
    path: "/cart",
    component: _2250181a,
    name: "cart"
  }, {
    path: "/checkout",
    component: _21993380,
    name: "checkout"
  }, {
    path: "/success",
    component: _2cdb0b79,
    name: "success"
  }, {
    path: "/my/orders",
    component: _8a7cf1d2,
    name: "my-orders"
  }, {
    path: "/my/profile",
    component: _96a5fd1a,
    name: "my-profile"
  }, {
    path: "/",
    component: _25021770,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
