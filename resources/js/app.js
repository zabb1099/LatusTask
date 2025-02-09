/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

// Import Vue and libraries
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import { BootstrapVue } from 'bootstrap-vue';
import VueHighlightJs from 'vue-highlight.js';
import xml from 'highlight.js/lib/languages/xml';

// Import Bootstrap and BootstrapVue CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// Use the libraries
Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueHighlightJs, {
    languages: {
        xml
    }
});

import JokesComponent from "./components/JokesComponent.vue";

const routes = [
{ name: "JokesComponent", path: '/jokes', component: JokesComponent},
];

const router = new VueRouter({ mode: 'history', routes });

// Register main component
Vue.component('app', require('./components/App.vue').default);


// Create  Vue instance
const app = new Vue({
    store,
    router,
    el: '#app',
});
