import mdButton from './index.vue'
mdButton.install = app => {
  app.component('mdButton', mdButton)
}
export default mdButton;