<template>
  <div id="app">
    <Index/>
  </div>
</template>

<script>
import Index from './views/Index';

export default {
    name: 'app',
    components: {
      Index,
    },
    created() {
        this.$store.dispatch('addBeerData');
        this.$store.dispatch('addBeerDataList');
    }
};
</script>

<style lang="scss">
body {
  background: #C4C4C4;
  margin: 0;
}

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;

  @media only screen and (min-width:768px) {
    margin: 0 auto;
  }
}

.wrapper {
  padding: 0 15px;
  
  @media only screen and (min-width: 768px) {
    padding: 0 20%;
  }
}

</style>
