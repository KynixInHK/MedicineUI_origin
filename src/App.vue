<script setup>
  import { ref, watch } from 'vue';
  // import mdRadioGroup from './components/MedicineUI/md-radio-group/index.vue';
  // import mdRadio from './components/MedicineUI/md-radio/index.vue';
  // import mdInput from './components/MedicineUI/md-input/index.vue'
  // import mdSwitch from './components/MedicineUI/md-switch/index.vue'
  // import mdTag from './components/MedicineUI/md-tag/index.vue'
  import mdPath from './components/MedicineUI/md-path/index.vue'
  import mdPathItem from './components/MedicineUI/md-path-item/index.vue'
  let value = ref('')
  watch(value, (newValue) => {
    console.log(newValue)
  })
  let input = ref('')
  watch(input, (newValue) => {
    console.log(newValue)
  })
  let swit = ref('')
  watch(swit, (newValue) => {
    console.log(newValue)
  })
  const showNewValue = () => {
    console.log(swit.value)
  }
  const close = () => {
    console.log('close')
  }

  const clicker = () => {
    console.log(click)
  }
</script>

<template>
  <div id="root">
    <mdPanel radius="25px" type="up" width="200px" class="md-panel">mdPanel</mdPanel>
    <mdButton :round="true" :circle="true" :disabled="false" @click="showNewValue">
      mdButton
    </mdButton>
    <mdRadioGroup v-model="value">
      <mdRadio value="male">男</mdRadio>
      <mdRadio value="female">女</mdRadio>
    </mdRadioGroup>

    <!-- <md-panel radius="25px" type="up" width="200px" class="md-panel">md-panel</md-panel> -->
    <md-input autofocus height="30px" type="password" title="125" tail="255" v-model="input" placeholder="12555" clearable></md-input>
    <md-switch from="hello" default="left" v-model="swit"></md-switch>
    <md-tag size="normal" type="success" @close="close" closable>国安配马宁，能赢阿根廷</md-tag>

    <md-path width="fit-content">
      <md-path-item @click="clicker">我有马宁你有谁</md-path-item>
      <md-path-item>我有马宁爱谁谁</md-path-item>
    </md-path>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  padding: 0;
  margin: auto;
  text-align: left;
  max-width: fit-content;
}
#root {
  background-color: #e6e7ee;
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.md-panel {
  margin: 0 auto;
}
</style>
