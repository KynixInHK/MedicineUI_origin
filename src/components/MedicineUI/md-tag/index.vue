<!-- 
    @name: MedicineUI_md-tag
    @author: Kynix Chan
    @time: 12/01/2022 11:50 UTC/GMT+08:00
    @location: Taipei, Taiwan
    @description: Tags for Medicine UI.
 -->
<script setup>
    // Import components.
    import { onMounted, ref } from 'vue';
    import mdPanel from '../md-panel';

    // Define props.
    const props = defineProps({
        size: {
            type: String,
            default: 'normal'
        },
        type: {
            type: String,
            default: 'default'
        },
        closable: {
            type: Boolean,
            default: false
        }
    })

    let mini_size = ref(false)
    let normal_size = ref(false)
    let large_size = ref(false)

    let type = {
        default: {
            bgc: '#e6e7ee',
            color: '#31344b'
        },
        success: {
            bgc: '#f0f9eb',
            color: '#18634b'
        },
        info: {
            bgc: '#e6e7ee',
            color: '#0056b3'
        },
        danger: {
            bgc: '#fef0f0',
            color: '#a91e2c'
        },
        steam: {
            bgc: '#e6e7ee',
            color: '#31344b'
        }
    }

    // Tag close
    const hover = (e) => {
        // console.log(e.target)
        e.target.style.fill = 'white'
        e.target.style.backgroundColor = type.steam.color
    }
    const leave = (e) => {
        e.target.style.fill = type.steam.color
        e.target.style.backgroundColor = ''
    }

    // Mount the application.
    onMounted(() => {
        // Size
        switch(props.size) {
            case 'mini' : mini_size.value = true; break
            case 'normal' : normal_size.value = true; break
            case 'large': large_size.value = true; break
        }

        // Background Color
        switch(props.type) {
            case 'info': {
                type.steam.bgc = type.info.bgc
                type.steam.color = type.info.color
                break
            }
            case 'success': {
                type.steam.bgc = type.success.bgc
                type.steam.color = type.success.color
                break
            }
            case 'danger': {
                type.steam.bgc = type.danger.bgc
                type.steam.color = type.danger.color
                break
            }
        }
    })
</script>

<template>
    <div id="mdTag">
        <md-panel
            width="fit-content"
            type="down"
            :class="{ tag_mini: mini_size, tag_normal: normal_size, tag_large: large_size }"
            :style="{ backgroundColor: type.steam.bgc, color: type.steam.color }"
        >
            <slot></slot>
            <svg 
                :class="{ md_tag__close_mini: mini_size, md_tag__close_normal: normal_size, md_tag__close_large: large_size }" 
                :fill="type.steam.color" 
                t="1616421224350" 
                viewBox="0 0 1024 1024" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg" 
                p-id="2058" 
                width="200" 
                height="200"
                @mouseenter="hover"
                @mouseleave="leave"
                v-if="props.closable"
                @click="$emit('close')"
            >
                <path d="M810.666667 273.493333L750.506667 213.333333 512 451.84 273.493333 213.333333 213.333333 273.493333 451.84 512 213.333333 750.506667 273.493333 810.666667 512 572.16 750.506667 810.666667 810.666667 750.506667 572.16 512z" p-id="2059"></path>
            </svg>
        </md-panel>
    </div>
</template>

<style scoped>
    .tag_mini {
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        font-size: 0.5em;
        height: 1rem;
        line-height: 1rem;
        border-radius: 0.5rem !important;
        display: flex;
        align-items: center;
    }
    .tag_normal {
        font-size: 0.8em;
        padding-left: 0.7rem;
        padding-right: 0.7rem;
        height: 1.5rem;
        line-height: 1.5rem;
        border-radius: 0.75rem !important;
        display: flex;
        align-items: center;
    }
    .tag_large {
        font-size: 1.2em;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 1rem !important;
        display: flex;
        align-items: center;
    }
    
    .md_tag__close_normal {
        width: 1.2em;
        height: 1.2em;
        transform: translateY(-0.05rem);
        margin-left: 0.3rem;
        border-radius: 0.6em;
    }

    .md_tag__close_mini {
        width: 1.2em;
        height: 1.2em;
        transform: translateY(-0.05rem);
        margin-left: 0.3rem;
        border-radius: 0.6em;
    }

    .md_tag__close_large {
        width: 1.2em;
        height: 1.2em;
        transform: translateY(-0.1rem);
        margin-left: 0.3rem;
        border-radius: 0.6em;
    }
</style>