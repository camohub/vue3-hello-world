<template>
  <div class="about">
    <h1>Search 2 page</h1>

    <SearchList />
    
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

        },
        comments: {
            SearchList
        }
    }

</script>