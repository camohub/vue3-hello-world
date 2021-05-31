<template>
  <div id="nav" class="text-center">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/search">Search</router-link>
  </div>
</template>


<script>
    export default {
        name: 'MainMenu',
        mounted() {
            console.log('components has been mounted');
        }    
    }
</script>


<style lang="scss" scoped>
    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>