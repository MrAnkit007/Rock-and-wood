import Vue from 'vue'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '..\\layouts\\error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_workbox_719bf492 from 'nuxt_plugin_workbox_719bf492' // Source: .\\workbox.js (mode: 'client')
import nuxt_plugin_nuxticons_abfe23dc from 'nuxt_plugin_nuxticons_abfe23dc' // Source: .\\nuxt-icons.js (mode: 'all')
import nuxt_plugin_googleanalytics_0154dd70 from 'nuxt_plugin_googleanalytics_0154dd70' // Source: .\\google-analytics.js (mode: 'client')
import nuxt_plugin_cookieuniversalnuxt_ab444ec4 from 'nuxt_plugin_cookieuniversalnuxt_ab444ec4' // Source: .\\cookie-universal-nuxt.js (mode: 'all')
import nuxt_plugin_toast_14a131a5 from 'nuxt_plugin_toast_14a131a5' // Source: .\\toast.js (mode: 'client')
import nuxt_plugin_init_52b3a330 from 'nuxt_plugin_init_52b3a330' // Source: ..\\plugins\\init.js (mode: 'client')
import nuxt_plugin_lazy_56cc77cb from 'nuxt_plugin_lazy_56cc77cb' // Source: ..\\plugins\\lazy (mode: 'client')
import nuxt_plugin_filters_2b4f519a from 'nuxt_plugin_filters_2b4f519a' // Source: ..\\plugins\\filters.js (mode: 'all')
import nuxt_plugin_firestore_574bf1fa from 'nuxt_plugin_firestore_574bf1fa' // Source: ..\\plugins\\firestore.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp (ssrContext) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"Rock and Wood | %s","title":"Ready to use NuxtJS + Firebase Shopping APP for Food Ordering","link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Karla:400,700"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.3264aabc.json"}],"meta":[{"http-equiv":"X-UA-Compatible","content":"IE=edge"},{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"keyword","name":"keyword","content":undefined},{"hid":"description","name":"description","content":"Ready to use NuxtJS + Firebase Shopping APP for Food Ordering"},{"hid":"og:title","property":"og:title","content":"Ready to use NuxtJS + Firebase Shopping APP for Food Ordering"},{"hid":"og:description","property":"og:description","content":"Ready to use NuxtJS + Firebase Shopping APP for Food Ordering"},{"hid":"twitter:title","property":"twitter:title","content":"Ready to use NuxtJS + Firebase Shopping APP for Food Ordering"},{"hid":"twitter:description","property":"twitter:description","content":"Ready to use NuxtJS + Firebase Shopping APP for Food Ordering"},{"hid":"og:url","property":"og:url","content":"https:\u002F\u002Ffoodfire.info"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"Rock and Wood"},{"hid":"author","name":"author","content":"Swadesh Behera"},{"hid":"theme-color","name":"theme-color","content":"#555"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"Rock and Wood"}],"noscript":[{"innerHTML":"We're sorry but Our Webapp doesn't work properly without JavaScript enabled. Please enable it to continue."}],"htmlAttrs":{"lang":"en"},"__dangerouslyDisableSanitizers":["script"],"style":[],"script":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  const inject = function (key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Plugin execution

  if (process.client && typeof nuxt_plugin_workbox_719bf492 === 'function') {
    await nuxt_plugin_workbox_719bf492(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxticons_abfe23dc === 'function') {
    await nuxt_plugin_nuxticons_abfe23dc(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googleanalytics_0154dd70 === 'function') {
    await nuxt_plugin_googleanalytics_0154dd70(app.context, inject)
  }

  if (typeof nuxt_plugin_cookieuniversalnuxt_ab444ec4 === 'function') {
    await nuxt_plugin_cookieuniversalnuxt_ab444ec4(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_toast_14a131a5 === 'function') {
    await nuxt_plugin_toast_14a131a5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_init_52b3a330 === 'function') {
    await nuxt_plugin_init_52b3a330(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_lazy_56cc77cb === 'function') {
    await nuxt_plugin_lazy_56cc77cb(app.context, inject)
  }

  if (typeof nuxt_plugin_filters_2b4f519a === 'function') {
    await nuxt_plugin_filters_2b4f519a(app.context, inject)
  }

  if (typeof nuxt_plugin_firestore_574bf1fa === 'function') {
    await nuxt_plugin_firestore_574bf1fa(app.context, inject)
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
