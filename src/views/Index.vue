<template>
    <div class="main-wrapper">
        <Header></Header>
        <transition name="animated" enter-active-class="animated slideInRight" leave-active-class="animated slideOutLeft">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

import Header from '../components/Header';
import Beers from '../components/Beers';

export default {
    name: 'Index',
    components: {
        Beers,
        Header,
    },
}
</script>

<style lang="scss">
    .beer-wrapper {
        margin: 20px auto;

        @media only screen and(min-width:1024px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }
</style>