<!-- 
    @name: MedicineUI_md-radio-group
    @author: Kynix Chan
    @time: 12/18/2022 18:22 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Checkbox for Medicine UI.
 -->
<script setup>
    import { onMounted, onUnmounted, ref } from 'vue';
    import Bus from './../event-bus';
    // Define props.
    const props = defineProps({
        value: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
            type: Boolean,
            default: false
        }
    })

    // Is the button checked?
    let checked = ref(props.checked)

    // Click the button
    const check = (e) => {
        if(!props.disabled) {
            let target = document.getElementById(props.value)
            let data = {
                value: props.value,
                operation: 'add'
            }
            if(!checked.value) {
                target.style.transform = 'rotateY(0deg)'
                data.operation = 'add'
            } else {
                target.style.transform = 'rotateY(90deg)'
                data.operation = 'cut'
            }
            Bus.$emit('changeCheckedStatus', data)
            checked.value = !checked.value
        }
    }

    // Mount the application
    onMounted(() => {
        // Checked.
        if(checked.value) {
            let target = document.getElementById(props.value)
            target.style.transform = 'rotateY(0deg)'
            setTimeout(() => {
                Bus.$emit('checked', props.value)
            },100)
        }

        // Disabled.
        if(props.disabled) {
            let label = document.getElementById(props.value + 'Label')
            let path = document.getElementById(props.value + 'Svg')
            label.style.color = 'grey'
            path.style.fill = 'grey'
        }
    })

    // Umount the application
    onUnmounted(() => {
        Bus.$off('checked')
    })
</script>

<template>
    <div id="mdCheckbox" @click="check">
        <span class="body">
            <div class="yes" :id="props.value">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="check">
                    <path :id="props.value + 'Svg'" fill="black" d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                </svg>
            </div>
        </span>
        <span class="label" :id="props.value + 'Label'">
            <slot></slot>
        </span>
    </div>
</template>

<style scoped>
    #mdCheckbox {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 1em;
    }
    .body {
        display: flex;
        width: 1.5em;
        height: 1.5em;
        background-color: #e6e7ee;
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
        border: .1rem solid #d1d9e6;
        line-height: 1.5em;
        align-items: center;
    }
    .yes {
        width: 1.5em;
        height: 1.5em;
        transform: rotateY(90deg);
        transition: all 0.3s linear;
    }
    .check {
        width: 1.5em;
    }
</style>