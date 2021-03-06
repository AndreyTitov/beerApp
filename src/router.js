import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home';
import Beers from './components/Beers';
import Beer from './components/Beer';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/products',
            name: 'products',
            component: Beers,
        },
        {
            path: '/products/beer/:id',
            name: 'beer',
            component: Beer,
        },
    ],
});