import Vue from 'vue'
// component
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  render: h => h(App)
  // components: {
  //   App,
  //   Sentence
  // },
  // template: '<App/>, <Sentence></Sentence>'
}).$mount("#app");
