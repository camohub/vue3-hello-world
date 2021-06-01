<template>
  <div class="container">

    <MainMenu />

    <router-view></router-view>

  </div>
</template>


<script>
  import MainMenu from '@/components/MainMenu.vue';

  export default {
    data() {
      return {
          searchResult: []
      }
    },
    components: {
      MainMenu,
    }
  }
</script>


<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    h1 {
      text-align: center;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to,
    .fade-leave-from {
        opacity: 1;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 2s ease;
    }
  }
</style>
