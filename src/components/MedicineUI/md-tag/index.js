import mdTag from './index.vue'
mdTag.install = app => {
  app.component('mdTag', mdTag)
}
export default mdTag;