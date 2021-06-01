<template>
    <div class="row">
        <h1 class="col-12">{{ title }}</h1>

        <SearchForm />

        <SearchList />
    </div>    
</template>


<script>
    import SearchForm from '@/components/searchITunes/SearchForm.vue';
    import SearchList from '@/components/searchITunes/SearchList.vue';

    export default {
        props: {
            title: {
                type: String,
                default: 'Prop title default value'
            },
        },
        data() {
            return {
            }
        },
        methods: {
        },
        components: {
            SearchForm, 
            SearchList,
        },
        created() {
            this.text = this.title + ' ' + this.text
        }
    }
</script>


<style lang="scss" scoped>

</style>