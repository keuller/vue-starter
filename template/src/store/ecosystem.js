import { store } from 'vuelm'

const state = {
    links: [
        { uri:'http://router.vuejs.org', label: 'Vue Router' },
        { uri:'https://github.com/keuller/vuelm', label: 'Vuelm' },
        { uri:'http://vue-loader.vuejs.org/', label: 'Vue Loader' },
        { uri:'https://github.com/vuejs/awesome-vue', label: 'Awesome Vue' }
    ]
}

const updates = {}

const actions = {}

export default store(state, updates, actions)
