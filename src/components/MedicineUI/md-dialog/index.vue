<!-- 
    @name: MedicineUI_md-dialog
    @author: Kynix Chan
    @time: 12/19/2022 14:34 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Dialog for Medicine UI.
 -->
<script setup>
    import mdPanel from '../md-panel';
    import { onMounted, ref, watch } from 'vue';
    import { nanoid } from 'nanoid';
    // Define props.
    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        a: {
            type: String,
            default: 'center'
        },
        width: {
            type: String,
            default: 'fit-content'
        },
        modelValue: {
            type: Boolean,
            default: false
        },
        cover: {
            type: Boolean,
            default: true
        },
        showClose: {
            type: Boolean,
            default: true
        },
        closeOnClickCover: {
            type: Boolean,
            default: false
        }
    })

    // Define Emits
    const emit = defineEmits(['update:modelValue'])

    // Chacha
    const chachaHover = (e) => {
        // console.log(e)
        let path = e.target.children[0]
        if(path.attributes.fill.value !== '#707070') {
            path.attributes.fill.value = '#707070'
        } else {
            path.attributes.fill.value = '#bfbfbf'
        }
    }

    // Define id
    const dialogId = nanoid()

    // Close dialog
    const close = () => {
        emit('update:modelValue', false)
    }

    // Click the cover to close the dialog.
    const canIClose = () => {
        console.log('close')
        if(props.closeOnClickCover) {
            close()
        }
    }

    // Mount the application
    onMounted(() => {
    })
</script>

<template>
    <!-- <Transition name="slide"> -->
        <div :id="dialogId" class="mdDialog">
            <Transition name="fade">
                <div @click="canIClose" class="cover" v-if="props.modelValue" :class="{ coverHide : !props.cover }"></div>
            </Transition>
            <Transition name="slide">
                <mdPanel class="dialogPanel" radius="1rem" :width="props.width" v-if="props.modelValue">
                    <div class="dialogHead">
                        <h2 class="dialogTitle">{{props.title}}</h2>
                        <svg t="1669636812601" class="chacha" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2697"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"
                            @mouseenter="chachaHover"
                            @mouseleave="chachaHover"
                            @click="close"
                            v-if="props.showClose"
                        >
                            <path d="M886.784 746.496q29.696 30.72 43.52 56.32t-4.608 58.368q-4.096 6.144-11.264 14.848t-14.848 16.896-15.36 14.848-12.8 9.728q-25.6 15.36-60.416 8.192t-62.464-34.816l-43.008-43.008-57.344-57.344-67.584-67.584-73.728-73.728-131.072 131.072q-60.416 60.416-98.304 99.328-38.912 38.912-77.312 48.128t-68.096-17.408l-7.168-7.168-11.264-11.264-11.264-11.264q-6.144-6.144-7.168-8.192-11.264-14.336-13.312-29.184t2.56-29.184 13.824-27.648 20.48-24.576q9.216-8.192 32.768-30.72l55.296-57.344q33.792-32.768 75.264-73.728t86.528-86.016q-49.152-49.152-93.696-93.184t-79.872-78.848-57.856-56.832-27.648-27.136q-26.624-26.624-27.136-52.736t17.92-52.736q8.192-10.24 23.552-24.064t21.504-17.92q30.72-20.48 55.296-17.92t49.152 28.16l31.744 31.744q23.552 23.552 58.368 57.344t78.336 76.288 90.624 88.576q38.912-38.912 76.288-75.776t69.632-69.12 58.368-57.856 43.52-43.008q24.576-23.552 53.248-31.232t55.296 12.8q1.024 1.024 6.656 5.12t11.264 9.216 10.752 9.728 7.168 5.632q27.648 26.624 27.136 57.856t-27.136 57.856q-18.432 18.432-45.568 46.08t-60.416 60.416-70.144 69.632l-77.824 77.824q37.888 36.864 74.24 72.192t67.584 66.048 56.32 56.32 41.472 41.984z" p-id="2698" fill="#bfbfbf"></path>
                        </svg>
                    </div>
                    <div class="dialogContent" :style="{ textAlign : props.a }">
                        <slot></slot>
                    </div>
                    <div class="dialogFooter">
                        <slot name="operation"></slot>
                    </div>
                </mdPanel>
            </Transition>
        </div>
    <!-- </Transition> -->
</template>

<style>
    .cover {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(230, 231, 238, 0.9);
        z-index: 200;
    }
    .coverHide {
        z-index: -200;
    }
    .mdDialog {
        /* position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -201; */
    }
    .mdDialogActive {
        z-index: 100;
    }
    .dialogPanel {
        padding: 2em;
        padding-bottom: 1em;
        position: fixed;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 50%;
        z-index: 201;
    }
    .dialogTitle {
        text-align: left;
        margin-bottom: 1em;
        margin-right: 3em;
        margin-top: -0.5em;
    }
    .chacha {
        width: 1.5em;
        height: 1.5em;
        display: inline-block;
        margin-top: -0.8em;
        margin-right: -1em;
        cursor: pointer;
    }
    .dialogHead {
        display: flex;
        justify-content: space-around;
    }
    .dialogFooter {
        text-align: right;
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.5s ease;
    }

    .slide-enter-from,
    .slide-leave-to {
        opacity: 0;
        transform: translate(-50%, -60%);
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>