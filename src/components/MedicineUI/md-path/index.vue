<script setup>
    // Import components.
    import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
    import mdPanel from '../md-panel';

    // Import the utils.
    import bus from './../event-bus'

    // Define props.
    const props = defineProps({
        width: {
            type: String,
            default: 'auto'
        },
        separator: {
            type: String,
            default: '/'
        }
    })

    // Mount the application.
    let count = ref(0)

    onMounted(() => {
        bus.$emit('separator', props.separator)
    })

    onBeforeUnmount(() => {
    })
</script>

<template>
    <div id="mdPath">
        <mdPanel
            class="path"
            type="down"
            :width="props.width"
            radius="1.5rem"
        >
            <slot>

            </slot>
        </mdPanel>
    </div>
</template>

<style scoped>
    .path {
        padding: 0.5rem;
        padding-left: 1rem;
        padding-right: 1rem;
    }
</style>