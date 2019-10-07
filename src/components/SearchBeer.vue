<template>
    <div class="search-wrapper">
        <input type="text" 
            placeholder="search by name"
            class="search-input"
            v-model="search" 
            onfocus="this.placeholder=''" 
            onblur="this.placeholder='search by name'"
            @blur="hideBeers">
        <transition name="animated" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="search-data__list"
                v-if="this.showBeers">
                <div :key="index" 
                    v-for="(beers, index) in getDataList"
                    class="search-data__item">
                    <!-- <router-link :to="{name: 'beer', params: {id: beers.id} }"> -->
                        <div class="search-data__item-img__wrapper">
                            <img :src="beers.image_url" alt="img" class="search-data__item-img">
                        </div>
                        <div class="search-data__item-name__wrapper">
                            <p class="search-data__item-name">{{beers.name}}</p>
                        </div>
                    <!-- </router-link> -->
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'SearchBeer',
    data() {
        return {
            showBeers: false,
            search: '',
        }
    },
    computed: {
        getDataList() {
            return this.$store.getters.getDataBeerList;
        },
    },
    methods: {
        hideBeers() {
            this.showBeers = false;
            this.search = '';
        }
    },
    watch: {
        search(val) {
            if(val !== '') {
                this.showBeers = true;
                const beersList = this.$store.getters.getDataBeer;
                const filtered = beersList.filter(beer => {
                    const beerName = beer.name.toLowerCase();
                    return beerName.toLowerCase().indexOf(val.toLowerCase()) !== -1;
                });

                this.$store.dispatch('updateBeersList', filtered);
            } else {
                this.showBeers = false;
            }
        },
    },
    created() {
        this.$store.dispatch('addBeerDataList');
    },
}
</script>

<style lang="scss">
    .search {
        &-wrapper {
            position: relative;
            z-index: 12;
        }

        &-data__list {
            position: absolute;
            background: #fff;
            left: 0;
            padding: 10px 0 0 0;
            width: 100%;
            z-index: 8;
        }

        &-data__item {
            padding: 10px 0;
            display: flex;
            align-items: center;
            cursor: pointer;

            &:hover {
                background: #c4c4c4;
                color: #fff;
            }

            &-img {
                height: 60px;

                &__wrapper {
                    width: 30%;
                }
            }

            &-name {
                text-align: left;

                &__wrapper {
                    width: 70%;
                }
            }
        }
    }

    .search-input {
        width: 100%;
        border-radius: 10px;
        border: 1px solid grey;
        font-size: 16px;
        box-sizing: border-box;
        padding: 10px 20px;
    }
</style>