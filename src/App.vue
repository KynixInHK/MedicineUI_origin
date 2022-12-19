<script setup>
  import { ref, watch, reactive } from 'vue';
  // import mdRadioGroup from './components/MedicineUI/md-radio-group/index.vue';
  // import mdRadio from './components/MedicineUI/md-radio/index.vue';
  // import mdInput from './components/MedicineUI/md-input/index.vue'
  // import mdSwitch from './components/MedicineUI/md-switch/index.vue'
  // import mdTag from './components/MedicineUI/md-tag/index.vue'
  // import mdCheckbox from './components/MedicineUI/md-checkbox/index.vue'
  // import mdCheckboxGroup from './components/MedicineUI/md-checkbox-group/index.vue'
  // import mdScrollbar from './components/MedicineUI/md-scrollbar/index.vue'
  // import mdDialog from './components/MedicineUI/md-dialog/index.vue'
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
    hide.value = !hide.value
  }
  const close = () => {
    console.log('close')
  }

  const clicker = () => {
    console.log(click)
  }

  let datas = reactive([])

  watch(datas, (newValue) => {
    console.log(newValue)
  })

  const echo = () => {
    hide.value = !hide.value
  }

  let hide = ref(false)

</script>

<template>
  <div id="root">
    <mdPanel radius="25px" type="up" width="200px" class="md-panel">mdPanel</mdPanel>
    <md-button :round="true" :circle="true" :disabled="false" @click="showNewValue">
      mdButton
    </md-button>
    <mdRadioGroup v-model="value" title="你好">
      <mdRadio value="male">男</mdRadio>
      <mdRadio value="female">女</mdRadio>
    </mdRadioGroup>

    <!-- <md-panel radius="25px" type="up" width="200px" class="md-panel">md-panel</md-panel> -->
    <md-input autofocus height="30px" type="password" title="125" tail="255" v-model="input" placeholder="12555" clearable></md-input>
    <md-switch from="hello" default="left" v-model="swit"></md-switch>
    <md-tag size="normal" type="success" @close="close" closable>国安配马宁，能赢阿根廷</md-tag>

    <md-checkbox-group v-model="datas">
      <md-checkbox value="111" checked>111</md-checkbox>
      <md-checkbox value="222" disabled checked>222</md-checkbox>
    </md-checkbox-group>

    <md-scrollbar height="200px">
      <div id="aaa">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat amet numquam eum facilis repellat ratione aspernatur autem iure, iusto repudiandae omnis ipsam saepe quos aperiam. Voluptatem sequi similique veniam dolorum?
        Perspiciatis tempora itaque incidunt quo magnam. Eveniet odit omnis maiores, sit delectus est corporis? Quidem odit repudiandae explicabo, minus dolore, dolorum iste corporis tenetur nihil unde consequuntur aut temporibus placeat?
        Officiis fugit veritatis delectus hic vitae eaque sed quidem animi sit rerum voluptate, ea accusantium optio minus dicta beatae eius modi pariatur sunt inventore aperiam aliquam facere! Inventore, nihil ullam.
        Repudiandae ab eveniet iure earum dolore ipsam! Perspiciatis necessitatibus maxime dicta magnam illum laboriosam voluptatibus dolorem modi amet. Accusantium explicabo facere debitis minima laborum assumenda modi error officia exercitationem reiciendis.
        Molestiae natus reiciendis odit, accusamus quidem, ipsam dolore impedit magnam saepe corrupti expedita in fugit dolorum culpa harum fugiat dicta doloremque laboriosam. Neque unde tempora nulla ipsa cumque dolorem quod?
        Quasi vitae atque veniam, provident blanditiis rem molestiae, tenetur natus ducimus, porro quia facere eum. Fuga nihil provident, quas ratione perspiciatis laudantium minima doloribus voluptates nemo, sequi, ipsam dignissimos maiores.
        Dicta fugiat omnis, vero blanditiis delectus quasi culpa? Sapiente corporis harum eos ea deleniti officiis natus. Blanditiis totam delectus animi. Praesentium repudiandae vitae alias reprehenderit ab dolorem laudantium quis cupiditate.
        Doloribus, velit? Reiciendis, quae ad minus hic quisquam quas corrupti, obcaecati excepturi in architecto ut mollitia alias eius voluptates recusandae provident facilis quia laboriosam quidem animi? Cum quas sapiente fugit?
        Ex, ad laudantium consequatur non cum fugiat repellat impedit atque voluptas culpa unde a hic dicta sunt quisquam ipsum consequuntur maiores tempore reiciendis harum maxime quia fuga molestias? Dolorem, nihil.
      </div>
    </md-scrollbar>

    <md-dialog title="1225152255888889" a="left" v-model="hide" :cover="true" :show-close="false" close-on-click-cover>1225
      <template #operation>
        <md-button>1255</md-button>
        <md-button @click="echo">1256</md-button>
      </template>
    </md-dialog>
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

#aaa {
  width: 600px;
}
</style>
