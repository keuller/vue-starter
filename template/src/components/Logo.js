import Vue from 'vue'

import VueLogo from '../assets/logo.png'

Vue.component('logo', {
    functional: true,
    render(h, context) {
        return (<img src={VueLogo} />)
    }
})
