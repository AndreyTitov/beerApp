<template>
    <div class="header">
        <div class="header-wrapper wrapper">
            <div class="logo-wrapper">
                <h3>Logo</h3>
            </div>
            <div class="menu-wrapper">
                <div class="menu-search__wrapper">
                    <transition name="animated" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <Search v-if="showSearch"></Search>
                    </transition>
                    <i class="material-icons menu-search__button" 
                        @click="showSearch = !showSearch">search</i>
                </div>
                <div class="menu-main__wrapper">
                    <i class="material-icons menu-main" @click="openMenu">menu</i>
                </div>
                <transition name="animated" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutRight">
                    <div class="menu-content"
                        v-if="showMenu">
                        <nav class="menu-content__list">
                            <router-link @click.native="closeMenu" to="/" class="menu-content__link">Home</router-link>
                            <router-link @click.native="closeMenu" to="/products" class="menu-content__link">Products</router-link>
                            <router-link @click.native="closeMenu" to="" class="menu-content__link">Menu 3</router-link>
                        </nav>
                    </div>
                </transition>
                <div class="menu-overlay"
                    v-if="showMenu"
                    @click="closeMenu"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from './SearchBeer';

export default {
    name: 'Header',
    components: {
        Search,

    },
    data() {
        return {
            showSearch: false,
            showMenu: false,
        }
    },
    methods: {
        openMenu() {
            this.showMenu = true;
        },
        closeMenu() {
            this.showMenu = false;
        }
    }
}
</script>

<style lang="scss">
    .header {
        background: #fff;
        padding: 20px 0;

        &-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    .menu {
        &-wrapper {
            display: flex;
            align-items: center;
        }

        &-search {
            &__wrapper {
                display: flex;
                align-items: center;
                position: relative;
            }

            &__button {
                cursor: pointer;
                z-index: 12;
                position: absolute;
                right: 10px;
            }
        }

        &-main {
            cursor: pointer;

            &__wrapper {
                width: 50px;
                text-align: right;
            }
        }

        &-content {
            position: absolute;
            background: #fff;
            z-index: 14;
            width: 50%;
            height: 100%;
            right: 0;
            top: 0;

            &__list {
                list-style-type: none;
                padding: 0;
            }

            &__link {
                display: block;
                text-decoration: none;
                padding: 10px;
            }

            &__item {
                padding: 10px 0;
            }
        }

        &-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10;
            background: rgba(0,0,0, 0.5);
        }
    }
</style>