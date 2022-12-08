<!-- 
    @name: MedicineUI_md-radio-group
    @author: Kynix Chan
    @time: 11/28/2022 18:02 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Radio group for Medicine UI.
 -->
<script setup>
    // Import system props.
    import { ref, reactive, onMounted, onUnmounted } from 'vue'

    // Import components.
    import mdPanel from '../md-panel';
    import Bus from '../event-bus';

    // Define Emits
    const emit = defineEmits(['update:modelValue'])

    // Define props
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: 'fit-content'
        },
        modelValue: {
            type: String,
            default: ''
        }
    })

    // Border Radius
    let radius = ref('15px')

    // Does the title exist?
    let isTitle = ref(false)

    // Mount component
    onMounted(() => {
        // Set the title
        if(props.title !== '') {
            radius.value = '0'
            isTitle.value = true
        } else {
            document.getElementById('title').style.visibility = 'hidden'
            document.getElementById('title').style.padding = '0'
            document.getElementById('title').style.setProperty('border', 'none', 'important')
        }

        // Receive the value.
        Bus.$on('value', (value) => {
            emit('update:modelValue', value) // Throw the value to the father.
            Bus.$emit('close', value)
        })

        // Receive the check states.
        let checkStatus = reactive([])
        Bus.$on('check', (value) => {
            checkStatus.push(value)
        })
        setTimeout(() => {
            Bus.$emit('status', checkStatus)
        }, 100)
    })

    // Unmount the component.
    onUnmounted(() => {
        Bus.$off('close')
        Bus.$off('status')
    })
</script>

<template>
    <div id="md-radio-group">
        <span id="title">
            {{ props.title }}
        </span>
        <mdPanel 
            id="md-radio-group-panel" 
            type="down" 
            :width="props.width" 
            :style="{ borderTopRightRadius: '15px', borderBottomRightRadius: '15px', borderTopLeftRadius: radius, borderBottomLeftRadius: radius }"
            :class="{ mdRadioGroupPanelFull : isTitle, mdRadioGroupPanelEmpty: !isTitle }"
        >
            <slot></slot>
        </mdPanel>
    </div>

</template>

<style scoped>
    #md-radio-group {
        display: grid;
        grid-template-columns: auto auto;
        width: fit-content;
        align-items: center;
    }

    .mdRadioGroupPanelFull {
        padding: 10px;
        height: 2em;
        display: flex;
        align-items: center;
    }

    .mdRadioGroupPanelEmpty {
        background-color: unset;
        box-shadow: none;
        display: flex;
        align-items: center;
    }

    #title {
        display: inline-block;
        width: fit-content;
        border: .1rem solid #d1d9e6;
        padding: calc(10px - .1rem);
        height: 2em;
        line-height: 2em;
        border-right: none;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
    }
</style>