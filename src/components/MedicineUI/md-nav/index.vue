<script setup>
    // Import custom components.
    import mdScrollbar from './../md-scrollbar/index.vue'
    // Define props.
    const props = defineProps({
        mainColor: {
            type: String,
            default: '#8f8f8f'
        },
        paste: {
            type: String,
            default: 'left'
        }
    })
</script>

<template>
    <div class="mdNav">
        <mdScrollbar>
            <slot></slot>
        </mdScrollbar>
    </div>
</template>

<style scoped>
    .mdNav {
        background-color: #e6e7ee;
        color: #848484;
        width: 20vw;
    }
</style>