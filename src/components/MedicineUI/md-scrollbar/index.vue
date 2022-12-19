<!-- 
    @name: MedicineUI_md-scrollbar
    @author: Kynix Chan
    @time: 12/18/2022 18:57 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Scrollbar for Medicine UI.
 -->
<script setup>
    // Define props.
    const props = defineProps({
        height: {
            type: String,
            default: 'fit-content'
        }
    })
</script>

<template>
    <div id="mdScrollbar" :style="{ height: props.height }">
        <slot></slot>
    </div>
</template>

<style scoped>
    #mdScrollbar {
        width: fit-content;
        overflow-y: scroll;
        padding: 0.2rem;
    }

    #mdScrollbar::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.2rem;
        background-color: #e6e7ee;
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
        border-radius: 0.5rem;
    }

    #mdScrollbar::-webkit-scrollbar-thumb {
        border-radius: 0.5rem;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        background: #d0d0d0;
    }

    #mdScrollbar:hover::-webkit-scrollbar-thumb {
        background: #8f8f8f;
    }
</style>