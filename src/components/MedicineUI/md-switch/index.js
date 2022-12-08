import mdSwitch from './index.vue'
mdSwitch.install = app => {
  app.component('mdSwitch', mdSwitch)
}
export default mdSwitch;