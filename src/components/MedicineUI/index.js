import mdPanel from './md-panel/index'
import mdButton from './md-button/index'
import mdRadioGroup from './md-radio-group/index'
import mdRadio from './md-radio/index'
import mdInput from './md-input/index'
import mdSwitch from './md-switch/index'
import mdTag from './md-tag/index'
import mdCheckbox from './md-checkbox'
import mdCheckboxGroup from './md-checkbox-group'
import mdScrollbar from './md-scrollbar'
import mdDialog from './md-dialog'

const components = [
    { name: 'mdPanel', component: mdPanel },
    { name: 'mdButton', component: mdButton },
    { name: 'mdRadioGroup', component: mdRadioGroup },
    { name: 'mdRadio', component: mdRadio },
    { name: 'mdInput', component: mdInput },
    { name: 'mdSwitch', component: mdSwitch },
    { name: 'mdTag', component: mdTag },
    { name: 'mdCheckbox', component: mdCheckbox },
    { name: 'mdCheckboxGroup', component: mdCheckboxGroup },
    { name: 'mdScrollbar', component: mdScrollbar },
    { name: 'mdDialog', component: mdDialog }
]

const install = (Vue) => {
    if(install.installed) return
    components.map(component => Vue.component(component.name, component.component))

}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    mdPanel,
    mdButton,
    mdRadioGroup,
    mdRadio,
    mdInput,
    mdSwitch,
    mdTag,
    mdCheckbox,
    mdCheckboxGroup,
    mdScrollbar,
    mdDialog
}