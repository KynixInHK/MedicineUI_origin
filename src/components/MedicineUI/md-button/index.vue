<!-- 
    @name: MedicineUI_md-button
    @author: Kynix Chan
    @time: 11/28/2022 00:34 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Button for Medicine UI.
 -->
<script setup>
    // Import system components.
    import { ref, reactive, onMounted, getCurrentInstance } from 'vue'
    import { nanoid } from 'nanoid'

    // Get proxy.
    let proxy = getCurrentInstance()

    // Define props.
    const props = defineProps({
        size: { // The size of button. Values are mini/normal/large/larger.
            type: String,
            default: 'normal'
        },
        type: { // The type of the button. Values are default/main/success/danger.
            type: String,
            default: 'default'
        },
        round: { // Whether the button is rounded corner.
            type: Boolean,
            default: false
        },
        circle: { // Whether the button is circle.
            type: Boolean,
            default: false
        },
        disabled: { // Whether the button is disabled.
            type: Boolean,
            default: false
        }
    })

    // Config the button styles
    const mouseDown = (e) => {
        e.target.style.boxShadow = 'inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff'
    }
    const mouseUp = (e) => {
        e.target.style.boxShadow = '3px 3px 6px #b8b9be, -3px -3px 6px #fff'
    }

    let id = nanoid()

    // Mount the component.
    onMounted(() => {
        // Size
        switch(props.size) {
            case 'mini': {
                document.getElementById(id).style.fontSize = '0.5em'; 
                break
            }
            case 'normal': {
                document.getElementById(id).style.fontSize = '1em'; 
                break
            }
            case 'large': {
                document.getElementById(id).style.fontSize = '1.5em'; 
                break
            }
            case 'larger': {
                document.getElementById(id).style.fontSize = '2em'; 
                break
            }
        }

        // Type
        switch(props.type) {
            case 'main': document.getElementById(id).style.color = '#0056b3'; break
            case 'success': document.getElementById(id).style.color = '#18634b'; break
            case 'danger': document.getElementById(id).style.color = '#a91e2c'; break
        }

        // Rounded
        if(props.round === true) {
            let mdButton = document.getElementById(id)
            let height = mdButton.offsetHeight
            mdButton.style.borderRadius = (height / 2) + 'px'
        }

        // Circle
        if(props.circle === true) {
            let content = proxy.slots.default()[0]
            if(content.type === 'img' || content.type === 'svg') {
                let mdButton = document.getElementById(id)
                let width = mdButton.offsetWidth
                mdButton.style.height = width + 'px'
                mdButton.style.borderRadius = (width / 2) + 'px'
            }
        }

        // Disable
        if(props.disabled === true) {
            document.getElementById(id).style.color = 'grey'
            document.getElementById(id).style.cursor = 'not-allowed'        
        }
    })
</script>

<template>
    <button :id="id" class="mdButton" @mousedown="mouseDown" @mouseup="mouseUp" :disabled="props.disabled">
        <slot></slot>
    </button>
</template>

<style scoped>
    .mdButton {
        width: fit-content;
        outline: none;
        border: none;
        background-color: #e6e7ee;
        color: #31344b;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        margin: 0.5rem;
    }
</style>