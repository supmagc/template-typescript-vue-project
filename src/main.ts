import Vue from 'vue';
import App from './components/app.vue';
import { VNode } from 'vue/types/umd';
import './polyfill';

new Vue({
    el: '#app',
    render: (h): VNode => h(App)
});
