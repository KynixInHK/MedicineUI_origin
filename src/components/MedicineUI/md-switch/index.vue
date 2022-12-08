<!-- 
    @name: MedicineUI_md-switch
    @author: Kynix Chan
    @time: 11/30/2022 16:59 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Switch for Medicine UI.
 -->
<script setup>
    // Import system props.
    import { onMounted, ref } from 'vue';

    // Import custom components.
    import mdPanel from '../md-panel';

    // Define emits.
    const emit = defineEmits(['update:modelValue'])

    // Define props.
    const props = defineProps({
        from: {
            type: String,
            default: ''
        },
        left: {
            type: String,
            default: ''
        },
        right: {
            type: String,
            default: ''
        },
        default: {
            type: String,
            default: 'left'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        activeValue: {
            type: String,
            default: ''
        },
        inactiveValue: {
            type: String,
            default: ''
        },
        modelValue: {
        }
    })

    // Mode
    let leftright = ref(false)

    // Switch
    let hasSwitch = ref(false)
    const switcher = () => {
        if(!props.disabled) {
            let swi = document.getElementById(props.from)
            if(hasSwitch.value === false) {
                swi.style.transform = 'translateX(1.1rem)'
                swi.style.backgroundColor = 'gray'
                hasSwitch.value = true
                emit('update:modelValue', (props.left !== '' && props.right !== '')?props.right:true)
            } else {
                swi.style.transform = 'translateX(0)'
                if(props.left === '' && props.right === '') {
                    swi.style.backgroundColor = '#e6e7ee'
                }
                hasSwitch.value = false
                emit('update:modelValue', (props.left !== '' && props.right !== '')?props.left:false)
            }
        }
    }

    // Mount the application.
    onMounted(() => {
        let swi = document.getElementById(props.from)
        if(props.left !== '' && props.right !== '') {
            swi.style.backgroundColor = 'gray'
            leftright.value = true
        }

        if(props.default === 'right') {
            swi.style.transform = 'translateX(1.1rem)'
            hasSwitch.value = true
            emit('update:modelValue', props.right !== ''?props.right:true)
        } else {
            emit('update:modelValue', props.left !== ''?props.left:false)
        }

        if(props.disabled) {
            swi.style.opacity = '0.6'
        }
    })
</script>

<template>
    <div id="mdSwitch">
        <span class="left" v-if="leftright" :class="{ bold: !hasSwitch, ban: props.disabled }">
            {{ props.left }}
        </span>

        <md-panel
            class="mdSwitch"
            width="2.6rem"
            type="down"
            radius="0.75rem"
            @click="switcher"
            :class="{ ban: props.disabled }"
        >
            <md-panel
                class="mdSwitchHeart"
                width="1.2rem"
                radius="0.6rem"
                :id="props.from"
            >

            </md-panel>
        </md-panel>

        <span class="right" v-if="leftright" :class="{ bold: hasSwitch, ban: props.disabled  }">
            {{ props.right }}
        </span>
    </div>
</template>

<style scoped>
    #mdSwitch {
        cursor: pointer;
        display: flex;
        justify-content: space-around;
        width: fit-content;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    .mdSwitch {
        height: 1.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    .mdSwitchHeart {
        height: 1.2rem;
        /* background-color: gray; */
        position: relative;
        top: 0.15rem;
        left: 0.15rem;
        transform: translateX(0);
        transition: all 0.2s ease;
    }
    .left {
        transform: translateY(0.05rem);
    }
    .right {
        transform: translateY(0.06rem);
    }
    .bold {
        font-weight: bold;
    }

    .ban {
        cursor: not-allowed;
    }
</style>