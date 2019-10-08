<template>
    <div v-if="beer" class="beer-wrapper wrapper">
        <div class="beer-item current">
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
            <div class="first-brewed-wrapper">
                <p class="first-brewed"><b>First brewed:</b> {{beer.first_brewed}}</p>
            </div>
            <div class="abv-wrapper">
                <p class="abv"><b>Alcohol by Volume:</b> {{beer.abv}}%</p>
                <div :class="`abv-status ${beer.abv > 6 ? 'abv-status-red' : 'abv-status-green'}`"></div>
            </div>
            <div class="ibu-wrapper">
                <p class="ibu"><b>International Bitterness Units:</b> {{beer.ibu}}</p>
            </div>
            <div class="srm-wrapper">
                <p class="srm"><b>Standard Reference Method:</b> {{beer.srm}}</p>
            </div>
            <div class="ingredients-wrapper">
                <div class="ingredients-title-wrapper" 
                    @click="showIngr = !showIngr">
                    <h3 class="ingredients-title">Ingredients</h3>
                    <div :class="`arrow-dropdown ${showIngr ? 'arrow-dropdown-open' : 'arrow-dropdown'}`"></div>
                </div>
                <transition name="animated" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
                <div class="ingredients-container"
                    v-if="showIngr">
                    <div class="hops-ingredient">
                        <h3 class="hops-title">Hops:</h3>
                        <div :key="index" 
                            v-for="(ingredients, index) in beer.ingredients.hops"
                            class="ingredients hops">
                            "{{ingredients.name}}" - Add in {{ingredients.add}}: {{ingredients.amount.value}} {{ingredients.amount.unit}}
                        </div> 
                    </div>
                    <div class="malt-wrapper">
                        <h3 class="malt-title">Malt:</h3>
                        <div :key="index"
                            v-for="(malt, index) in beer.ingredients.malt"
                            class="ingredients malt">
                            "{{malt.name}}": {{malt.amount.value}} {{malt.amount.unit}}
                        </div>
                    </div>
                    <div class="yeast-ingredients">
                        <h3 class="yeast-title">Yeast:</h3>
                        <div class="ingredients yeast">
                            {{beer.ingredients.yeast}}
                        </div>
                    </div>
                </div>
                </transition>
            </div>
            <div class="food-wrapper">
                <div class="food-title-wrapper"
                    @click="showFood = !showFood">
                    <h3 class="food-title">Food pairinng</h3>
                    <div :class="`arrow-dropdown 
                        ${showFood ? 'arrow-dropdown-open' : 'arrow-dropdown'}`"></div>
                </div>
                <transition name="animated" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
                    <div v-if="showFood">
                        <p :key="index" 
                            v-for="(food, index) in beer.food_pairing">
                            {{food}}
                        </p>
                    </div>
                </transition>
            </div>
            <div class="contrib-wrapper">
                <p class="contrib">Contributed by: <b>{{beer.contributed_by}}</b></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            beer: null,
            beers: this.$store.getters.getDataBeer,
            showFood: false,
            showIngr: false,
            abvStatus: 6,
        }
    },
    created() {
        let beerId = this.$route.params.id;
        this.beer = this.$store.getters.getDataBeerList[beerId];
        // console.log(this.beer);
    }
}
</script>

<style lang="scss">
    .beer-wrapper {
        margin: 20px auto;
        z-index: 9;

        @media only screen and(min-width:1024px) {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    .current {
        width: 100%;
        z-index: 9;
        position: relative;
        overflow: hidden;

        @media only screen and (min-width: 768px) {
            width: 50%;
            margin: 0 auto;
        }
    }
</style>