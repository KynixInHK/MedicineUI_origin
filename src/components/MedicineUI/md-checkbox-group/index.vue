<!-- 
    @name: MedicineUI_md-radio-group
    @author: Kynix Chan
    @time: 12/18/2022 18:22 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Checkbox group for Medicine UI.
 -->
<script setup>
    // Import system props.
    import { ref, reactive, onMounted, onUnmounted } from 'vue'
    import { nanoid } from 'nanoid';

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
            type: Array,
            default: ''
        }
    })

    // Border Radius
    let radius = ref('15px')

    // Does the title exist?
    let isTitle = ref(false)

    // Define data
    let datas = reactive([])

    // Define titleId
    const titleId = nanoid()

    // Mount the application
    onMounted(() => {
        // Set the title
        if(props.title !== '') {
            radius.value = '0'
            isTitle.value = true
        } else {
            document.getElementById(titleId).style.visibility = 'hidden'
            document.getElementById(titleId).style.padding = '0'
            document.getElementById(titleId).style.setProperty('border', 'none', 'important')
        }

        // Previous checked values
        Bus.$on('checked', (value) => {
            datas.push(value)
            emit('update:modelValue', datas)
        })

        // Receive the data
        Bus.$on('changeCheckedStatus', (value) => {
            if(value.operation === 'add') {
                datas.push(value.value)
            } else {
                for(let i = 0;i < datas.length;i ++) {
                    if(datas[i] === value.value) {
                        datas.splice(i, 1)
                        break
                    }
                }
            }
            emit('update:modelValue', datas)
        })
    })

    onUnmounted(() => {
        Bus.$off('checked')
    })
</script>

<template>
    <div id="mdCheckboxGroup">
        <span class="title" :id="titleId">
            {{ props.title }}
        </span>
        <mdPanel 
            id="md-checkbox-group-panel" 
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
    #mdCheckboxGroup {
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

    .title {
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