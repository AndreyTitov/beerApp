<template>
    <div class="main-wrapper">
        <Header></Header>
        <router-view></router-view>
        <!-- <div class="beer-wrapper wrapper">
            <template v-for="item in getData">
                <Beers :key="item.id" :beer="item"></Beers>
            </template>
        </div> -->
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
    computed: {
        getData() {
            return this.$store.getters.getDataBeer;
        }
    },
    created() {
        this.$store.dispatch('addBeerData');
    }
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