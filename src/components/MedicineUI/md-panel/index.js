import mdPanel from './index.vue'
mdPanel.install = app => {
  app.component('mdPanel', mdPanel)
}
export default mdPanel;