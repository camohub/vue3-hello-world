<template>
    <div>
        <h1>{{ title }}</h1>
        <div>{{ text }}</div>
        <div>ščťžýáíéŇŤŘĎČŠÓÍÚ</div>
        <div>{{ test }}</div>
    </div>
</template>


<script>
    export default {
        props: {
            test: {
                type: String,
                default: "Model prop default",
            },
            title: {
                type: String,
                default: 'Prop title default value'
            },
        },
        data() {
            return {
                text: 'This is some text form component variable.'
            }
        },
    }
</script>


<style lang="scss" scoped>

</style>