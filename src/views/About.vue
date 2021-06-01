<template>
  <div class="about">
    <h1>This is an about page</h1>

    <SearchList :searchResult="this.searchResult" />
    
  </div>
</template>


<script>

    import SearchList from '@/components/searchITunes/SearchList.vue';

    export default {
        data() {
            return {
                searchResult: [],
            }
        },
        mounted() {
            window.mitt.on('onSearch', (data) => {
                this.searchResult = data;
            })
        },
        comments: {
          SearchList
        }
    }

</script>