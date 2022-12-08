<!-- 
    @name: MedicineUI_md-panel
    @author: Kynix Chan
    @time: 11/26/2022 20:03 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Panel for Medicine UI.
 -->
<script setup>
    // Import system components.
    import { ref, reactive, onMounted } from 'vue'
    // Define props.
    const props = defineProps({
        width: { // The width of panel.
            type: String,
            default: 'auto'
        },
        radius: { // The radius of panel.
            type: String,
            default: '0px'
        },
        type: { // The type of panel, only 2 options can be selected: up/down.
            type: String,
            default: 'up'
        }
    })
    // Change the display mode according to the type prop.
    let type = ref(true)
    // Execute something when the application is mounted.
    onMounted(() => {
        // Change the panel's type.
        if(props.type === 'up') {
            type.value = true
        } else if(props.type === 'down') {
            type.value = false
        }
    })
</script>

<template>
    <div id="mPanel" :style="{ width: props.width, borderRadius: props.radius }" :class="{ md_panel_up: type, md_panel_down: !type }">
        <slot></slot>
    </div>
</template>

<style scoped>
    .md_panel_up {
        background-color: #e6e7ee;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        color: #31344b;
    }
    .md_panel_down {
        background-color: #e6e7ee;
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
        color: #31344b;
    }
</style>