import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

// Socket.IO
import io from 'socket.io-client';

const socket = io(process.env.SOCKET_ENDPOINT);

Object.defineProperty(Vue.prototype, '$socket', {
  get() {
    return socket;
  },
});

Vue.socket = socket;

// Vuex
import  VueRouterSync from 'vuex-router-sync';
import store from './store';

// Vue Router
import VueRouter from 'vue-router';
import routers from './routers';

Vue.use(VueRouter);

export const router  = new VueRouter({
  routers,
});
VueRouterSync.sync(store, router);

Vue.router = router;

// Styling
import './assets/sass/app.css';

export default {
  router,
};
