<!-- 
    @name: MedicineUI_md-radio-group
    @author: Kynix Chan
    @time: 11/28/2022 18:02 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Radio for Medicine UI.
 -->
<script setup>
    // Import system props.
    import { ref, reactive, onMounted, onUnmounted } from 'vue'

    // Import event bus.
    import Bus from '../event-bus';

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

    // Change the value.
    let disabled = ref(props.disabled)
    const change = () => {
        if(disabled.value === false) {
            Bus.$emit('value', props.value)
        }
    }

    // Mount the component
    onMounted(() => {
        Bus.$on('close', (value) => {
            let dots = document.getElementsByClassName('dot')
            if(value === props.value) {
                for(let i = 0;i < dots.length;i ++) {
                    if(dots[i].id === value) {
                        dots[i].style.transform = 'scale(1)'
                    } else {
                        dots[i].style.transform = 'scale(0)'
                    }
                }
            }
        })

        // Checked.
        setTimeout(() => {
            Bus.$emit('check', { value: props.value, checked: props.checked })
        }, 100)
        Bus.$on('status', (value) => {
            if(props.checked === true) {
                let checknum = 0
                for(let i = 0;i < value.length;i ++) {
                    if(value[i].checked === true) {
                        checknum ++
                    }
                }
                if(checknum === 1) {
                    Bus.$emit('value', props.value)
                }
            }
        })

        // Disabled. When one radio is disabled, then all radios will be disabled.
        if(props.disabled === true) {
            setTimeout(() => {
                Bus.$emit('ban', 'ban')
            }, 100)
            let dots = document.getElementsByClassName('dot')
            for(let i = 0;i < dots.length;i ++) {
                dots[i].style.backgroundColor = 'grey'
            }
        }
        Bus.$on('ban', () => {
            disabled.value = true
        })
    })

    // Unmount the component
    onUnmounted(() => {
        Bus.$off('value')
        Bus.$off('check')
        Bus.$off('ban')
    })
</script>

<template>
    <div id="mdRadio" @click="change">
        <span class="body">
            <div class="dot" :id="props.value"></div>
        </span>
        <span class="label">
            <slot></slot>
        </span>
    </div>
</template>

<style scoped>
    #mdRadio {
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
        border-radius: 0.75em;
        line-height: 1.5em;
        align-items: center;
    }
    .label {
        display: inline-block;
        width: fit-content;
        margin-left: 0.7em;
        transform: translateY(0.1em);
    }
    .dot {
        width: 0.8em;
        height: 0.8em;
        border-radius: 0.4em;
        background-color: black;
        margin: 0 auto;
        transform: scale(0);
        transition: transform .2s linear;
    }
</style>