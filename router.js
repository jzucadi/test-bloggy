import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _c314fff6 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _24965d78 = () => import('../pages/topics/index.vue' /* webpackChunkName: "pages/topics/index" */).then(m => m.default || m)
const _642e6004 = () => import('../pages/authors/index.vue' /* webpackChunkName: "pages/authors/index" */).then(m => m.default || m)
const _959e9854 = () => import('../pages/pages/_page.vue' /* webpackChunkName: "pages/pages/_page" */).then(m => m.default || m)
const _6591f654 = () => import('../pages/authors/_author.vue' /* webpackChunkName: "pages/authors/_author" */).then(m => m.default || m)
const _5d64772e = () => import('../pages/topics/_topic.vue' /* webpackChunkName: "pages/topics/_topic" */).then(m => m.default || m)
const _06856b54 = () => import('../pages/_article.vue' /* webpackChunkName: "pages/_article" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _c314fff6,
			name: "index"
		},
		{
			path: "/topics",
			component: _24965d78,
			name: "topics"
		},
		{
			path: "/authors",
			component: _642e6004,
			name: "authors"
		},
		{
			path: "/pages/:page?",
			component: _959e9854,
			name: "pages-page"
		},
		{
			path: "/authors/:author",
			component: _6591f654,
			name: "authors-author"
		},
		{
			path: "/topics/:topic",
			component: _5d64772e,
			name: "topics-topic"
		},
		{
			path: "/:article",
			component: _06856b54,
			name: "article"
		}
    ],
    
    
    fallback: false
  })
}
