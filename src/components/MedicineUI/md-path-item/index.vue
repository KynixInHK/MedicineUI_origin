<script setup>
    // Import the utils
    import { onBeforeUnmount, onMounted, ref } from 'vue';
    import bus from './../event-bus'

    // Separator
    let separator = ref('/')

    // Mount the application
    onMounted(() => {
        bus.$on('separator', (sep) => {
            separator.value = sep
        })
    })
    onBeforeUnmount(() => {
        bus.$off('separator')
    })
</script>

<template>
    <div id="mdPathItem" @click="$emit('click')">
        <slot></slot>
        <span>&nbsp;{{ separator }}&nbsp;</span>
    </div>
</template>

<style scoped>
    #mdPathItem {
        display: inline;
    }
</style>