<!-- 
    @name: MedicineUI_md-input
    @author: Kynix Chan
    @time: 11/28/2022 21:13 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Input for Medicine UI.
 -->
<script setup>
    // Import system props.
    import { ref, reactive, onMounted } from 'vue'
    import fault from './../img/fault.svg'
    import fault_hover from './../img/fault_hover.svg'
    import eye_close_fill from './../img/eye_close_fill.svg'
    import eye_close_fill_hover from './../img/eye_close_fill_hover.svg'
    import eye_fill from './../img/eye_fill.svg'
    import eye_fill_hover from './../img/eye_fill_hover.svg'
    // Define props
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: 'auto'
        },
        modelValue: {
            type: String,
            default: ''
        },
        maxlength: {
            type: Number,
        },
        minlength: {
            type: Number,
        },
        placeholder: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false
        },
        readonly: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        height: {
            type: String,
            default: '1.5em'
        },
        fontSize: {
            type: String,
            default: '1em'
        },
        type: {
            type: String,
            default: 'text'
        },
        tail: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        }
    })

    // Type
    let type = ref(props.type)

    // Define emits
    const emit = defineEmits(['update:modelValue'])
    // Title and tail
    let isTitle = ref(false)
    let isTail = ref(false)

    // Input
    let clearable = ref(false)
    const input = (e) => {
        if(props.clearable === true && e.target.value !== '') {
            clearable.value = true
        } else {
            clearable.value = false
        }
        if(props.type === 'password' && e.target.value !== '') {
            password.value = true
        } else {
            password.value = false
        }
        emit('update:modelValue', e.target.value)
    }

    // Clearable
    const width = parseInt(props.height.split('px')[0]) / 1.5 + 'px'
    const icon = ref(fault)
    const changeLogo = () => {
        if(icon.value === fault) {
            icon.value = fault_hover
        } else {
            icon.value = fault
        }
    }
    const clear = () => {
        emit('update:modelValue', '')
        clearable.value = false
        password.value = false
    }

    // Password
    const icon2 = ref(eye_close_fill)
    let password = ref(false)
    const changeLogo2 = () => {
        if(icon2.value === eye_close_fill) {
            icon2.value = eye_close_fill_hover
        } else if(icon2.value === eye_close_fill_hover){
            icon2.value = eye_close_fill
        } else if(icon2.value === eye_fill) {
            icon2.value = eye_fill_hover
        } else {
            icon2.value = eye_fill
        }
    }

    const showPassword = () => {
        if(type.value === 'password') {
            type.value = 'text'
            icon2.value = eye_fill_hover
        } else {
            type.value = 'password'
            icon2.value = eye_close_fill_hover
        }
    }

    // Mount the component
    onMounted(() => {
        if(props.title !== '') {
            isTitle.value = true
        }
        if(props.tail !== '') {
            isTail.value = true
        }
    })
</script>

<template>
    <div id="mdInput">
        <span :style="{ height: props.height, lineHeight: props.height }" :class="{ mdInputTitle: isTitle }">
            {{props.title}}
        </span>
        <span class="inputPanel" :class="{ mdInputWithTitle : isTitle && !isTail, mdInputWithoutTitle : !isTitle && !isTail, mdInputWithTail: !isTitle && isTail}">
            <input 
                :type="type" 
                class="mdInputBody" 
                :style="{ width: props.width, height: props.height, fontSize: props.fontSize }"
                :value="modelValue"
                @input="input"
                :maxlength="props.maxlength"
                :minlength="props.minlength"
                :placeholder="props.placeholder"
                :readonly="props.readonly"
                :autofocus="props.autofocus"
                :disabled="props.disabled"
                @blur="$emit('blur')"
                @focus="$emit('focus')"
            >
            <img :src="icon2" class="clear" :style="{ width: width }" v-if="password" @mouseenter="changeLogo2" @mouseleave="changeLogo2" @click="showPassword">
            <img :src="icon" class="clear" :style="{ width: width }" v-if="clearable" @mouseenter="changeLogo" @mouseleave="changeLogo" @click="clear">
        </span>
        <span :style="{ height: props.height, lineHeight: props.height }" :class="{ mdInputTail: isTail }">
            {{props.tail}}
        </span>
    </div>
</template>

<style scoped>
    #mdInput {
        transform: translateY(20px);
        display: flex;
        align-items: center;
    }

    .mdInputBody {
        outline: none;
        border: none;
        background-color: rgba(0, 0, 0, 0);
    }
    .mdInputWithTail {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
    }
    .mdInputWithTitle {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }
    .mdInputWithoutTitle {
        border-radius: 0.5rem;
    }
    .mdInputTitle {
        border: .1rem solid #d1d9e6;
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
        border-right: none;
        padding: 0.4rem;
    }
    .mdInputTail {
        border: .1rem solid #d1d9e6;
        border-top-right-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
        border-left: none;
        padding: 0.4rem;
    }
    .inputPanel {
        display: flex;
        align-items: center;

        outline: none;
        border: none;
        background-color: #e6e7ee;
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
        color: #31344b;
        padding: 0.5rem;
    }
    .clear {
        cursor: pointer;
    }

    input[type="password"]::-ms-reveal{
        display:none
    }

</style>