import Vue from 'vue'
// import App from './App.vue'
import VueUploadMultipleImage from './components/VueUploadMultipleImage'
import VueLazyload from 'vue-lazyload'
import loadingImage from './assets/loading.gif'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadingImage,
  attempt: 1
})

// Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)

// if (document.querySelector('#my-strictly-unique-vue-upload-multiple-image')) {
//   Vue.component('VueUploadMultipleImage', VueUploadMultipleImage)

//   new Vue({
//     el: '#my-strictly-unique-vue-upload-multiple-image',
//     render: h => h(App)
//   })
// }

export default VueUploadMultipleImage
