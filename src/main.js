// import Vue from 'vue'  // 本地开发调试时放开
// import App from './App.vue' // 本地开发调试时放开
import VueUploadMultipleImage from './components/VueUploadMultipleImage'
import VueLazyload from 'vue-lazyload'
import loadingImage from './assets/loading.gif'

window.Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadingImage,
  attempt: 1
})

/* if (document.querySelector('#my-strictly-unique-vue-upload-multiple-image')) { // 本地开发调试时放开
  Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)

  new Vue({
    el: '#my-strictly-unique-vue-upload-multiple-image',
    render: h => h(App)
  })
} */

export default VueUploadMultipleImage
