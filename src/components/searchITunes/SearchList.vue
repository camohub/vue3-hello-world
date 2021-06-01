<template>


    <transition-group tag="ul" name="list-fade" appear class="col-sm-8 offset-sm-2">
        
        <li v-for="item in searchResult" 
            :key="item.collectionId + item.trackId + item.trackNumber"
            class="mb-3 row">
            <div class="col-lg-6">
                <img v-if="item.artworkUrl60" :src="item.artworkUrl60" alt="image" class="float-left mr-2">
                
                <div><b>{{item.artistName}}</b></div>
                <div>{{item.trackName}}</div>
            </div>
            <div class="col-lg-6 text-right">
                <figure>
                    <figcaption></figcaption>
                    <audio controls :src="item.previewUrl"></audio>
                </figure>
            </div>                
        </li>

    </transition-group>

</template>


<script>
    export default {
        props: {
            
        },
        data() {
            return {
                searchResult: [],
            }
        },
        mounted() {
            window.mitt.on('onSearch', (data) => this.searchResult = data);
        }
    }
</script>


<style lang="scss" scoped>    
    li {
        list-style-type: none;
        background-color: #f1f3f4;
        padding: 7px;
        overflow: hidden;
    }

    figure {
        margin-bottom: 0;
        display: inline-block;
    }

    .list-fade-enter-from {
        opacity: 0;
        transform: scale(.9);
    }

    .list-fade-enter-active {
        transition: all .5s ease;
    }

    .list-fade-enter-to {
        opacity: 1;
        transform: scale(1);
    }
</style>