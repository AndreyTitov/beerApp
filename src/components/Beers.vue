<template>
    <div class="beer-wrapper wrapper">
        <div class="beer-item" 
            :key="index" 
            v-for="(beer, index) in getData">
            <div class="title-wrapper">
                <h3 class="title">{{beer.name}}</h3>
            </div>
            <div class="img-container">
                <div class="img-wrapper">
                    <img :src="beer.image_url" alt="" class="img">
                </div>
            </div>
            <div class="tagline-wrapper">
                <p class="tagline">{{beer.tagline}}</p>
            </div>
            <div class="brewers-tips-wrapper">
                <p><b>Brewers tips</b> <br>{{beer.brewers_tips}}</p>
            </div>
            <div class="contrib-wrapper">
                <p class="contrib">Contributed by: <b>{{beer.contributed_by}}</b></p>
            </div>
            <div class="more-btn__wrapper">
                <router-link :to="{name: 'beer', params: {id: index} }" class="more-btn">More</router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Beers',
    data() {
        return {
            beerData: [],
            showFood: false,
            showIngr: false,
            abvStatus: 6,
        }
    },
    computed: {
        getData() {
            console.log(this.$store.getters.getDataBeerList);
            return this.$store.getters.getDataBeer;
        }
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

    .beer-item {
        padding: 10px;
        border: 1px solid rgba(0,0,0, 0.1);
        margin-top: 10px;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
        overflow: hidden;
        background: #000;
        color: #E1E1E1;

        &:first-child {
            margin-top: 0px;
        }

        @media only screen and(min-width:1024px) {
            width: 45%;

            &:first-child {
                margin-top: 10px;
            }
        }
    }

    .title {
        font-size: 26px;
        margin: 10px 0;
    }

    .img {
        height: 180px;

        &-wrapper {
            width: 50%;
            margin: 0 auto;
        }

        &-container {
            background: #E1E1E1;
            padding: 20px 0;
        }
    }

    .tagline {
        font-size: 20px;
    }

    .abv, .ibu, .srm {
        text-align: left;
        font-size: 14px;
        margin: 0;
    }

    .abv-wrapper, .ibu-wrapper, .srm-wrapper {
        margin: 10px 0;
    }

    .abv {

        &-status {
            background: yellow;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            margin-left: 10px;

            &-red {
                background: red;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-left: 10px;
            }

            &-green {
                background: green;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                margin-left: 10px;
            }
        }

        &-wrapper {
            display: flex;
            align-items: center;
        }
    }

    .ibu {
        font-size: 14px;
    }

    .brewers-tips-wrapper {
        p b {
            font-size: 22px;
        }
    }

    .contrib {
        font-size: 8px;

        &-wrapper {
            text-align: right;
        }
    }

    .first-brewed {
        text-align: left;
    }

    .food {
        &-title {
            margin: 0;

            &-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    .arrow-dropdown {
        position: relative;
        width: 26px;
        height: 26px;
        transition: all .5s ease;
        border: 2px solid #e1e1e1;
        border-radius: 50%;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 3px;
            width: 12px;
            height: 2px;
            transform: translateY(-50%) rotate(45deg);
            background: #E1E1E1;
            transition: all .5s ease;
        }

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 3px;
            width: 12px;
            height: 2px;
            transform: translateY(-50%) rotate(-45deg);
            background: #E1E1E1;
            transition: all .5s ease;
        }

        &-open {
            position: relative;
            width: 26px;
            height: 26px;
            transition: all .5s ease;

            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 3px;
                width: 12px;
                height: 2px;
                transform: translateY(-50%) rotate(0deg);
                background: #E1E1E1;
                transition: all .5s ease;
            }

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                right: 3px;
                width: 12px;
                height: 2px;
                transform: translateY(-50%) rotate(0deg);
                background: #E1E1E1;
                transition: all .5s ease;
            }
        }
    }


    .ingredients {
        text-align: left;

        &-title {
            margin: 0;

            &-wrapper {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 10px 0;
                cursor: pointer;
            }
        }
    }

    .hops {

        &-title {
            text-align: left;
            margin: 5px 0;
        }
    }

    .malt {

        &-title {
            text-align: left;
        }
    }

    .yeast {

        &-title {
            text-align: left;
        }
    }

    .more-btn {
        border: 1px solid #fff;
        text-decoration: none;
        border-radius: 5px;
        background: none;
        color: #fff;
        padding: 5px 15px;
        text-transform: uppercase;

        &__wrapper {
            margin: 20px 0 10px 0;
        }
    }
</style>