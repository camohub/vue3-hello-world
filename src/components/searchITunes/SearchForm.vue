<template>

    <transition name="form-fade" appear>
        <form action="#" @submit.prevent="search" class="col-sm-8 offset-sm-2 mb-3 mt-3">
            
            <input type="text" ref="searchInput" v-model="searchVal" class="form-control">
            <div v-if="hasError" class="text-danger mt-2" @click="hasError = false">Request error</div>
        </form>    
    </transition>   

</template>


<script>
    import axios from "axios";

    export default {
        props: {

        },
        data() {
            return {
                searchVal: '', 
                hasError: false,
            }
        },
        methods: {
            search() 
            {
                this.hasError = false;
                let search = encodeURI(this.searchVal);

                if(!search) return;

                let url = `https://itunes.apple.com/search?`;
                url += `term=${search}&media=music&entity=song&limit=10`;
            
                axios.get(url)
                    .then((response) => { 
                        console.log(response);
                        window.mitt.emit('onSearch', response.data.results);
                    })
                    .catch((respose) => {
                        console.log(respose);
                        this.hasError = true;
                    });
            },
        },   
    }
</script>


<style lang="scss" scoped>

    form {
        background-color: #f1f3f4;
        padding: 25px 10%;
    }

    .form-fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        transform: scale(.9);
    }

    .form-fade-enter-active,
    .fade-leave-active {
        transition: all .5s ease;
    }

    .form-fade-enter-to,
    .fade-leave-from {
        opacity: 1;
        transform: scale(1);
    }

</style>