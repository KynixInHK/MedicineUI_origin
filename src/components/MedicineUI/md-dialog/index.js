import mdDialog from './index.vue'
mdDialog.install = app => {
  app.component('mdDialog', mdDialog)
}
export default mdDialog;