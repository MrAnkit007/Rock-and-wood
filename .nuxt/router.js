import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _18d1ec4e = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _496520cb = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages_cart" */))
const _037aa31e = () => interopDefault(import('..\\pages\\checkout.vue' /* webpackChunkName: "pages_checkout" */))
const _35997928 = () => interopDefault(import('..\\pages\\success.vue' /* webpackChunkName: "pages_success" */))
const _d31c33f4 = () => interopDefault(import('..\\pages\\my\\orders\\index.vue' /* webpackChunkName: "pages_my_orders_index" */))
const _380effa2 = () => interopDefault(import('..\\pages\\my\\profile.vue' /* webpackChunkName: "pages_my_profile" */))
const _ade9fc92 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _18d1ec4e,
    name: "admin"
  }, {
    path: "/cart",
    component: _496520cb,
    name: "cart"
  }, {
    path: "/checkout",
    component: _037aa31e,
    name: "checkout"
  }, {
    path: "/success",
    component: _35997928,
    name: "success"
  }, {
    path: "/my/orders",
    component: _d31c33f4,
    name: "my-orders"
  }, {
    path: "/my/profile",
    component: _380effa2,
    name: "my-profile"
  }, {
    path: "/",
    component: _ade9fc92,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
