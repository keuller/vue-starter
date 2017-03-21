import { store } from 'vuelm'

const state = {
    links: [
        { uri:'https://vuejs.org', label: 'Web Site' },
        { uri:'https://forum.vuejs.org', label: 'Forum' },
        { uri:'https://gitter.im/vuejs/vue', label: 'Gitter Chat' },
        { uri:'https://twitter.com/vuejs', label: 'Twitter' }
    ]
}

const updates = {}

const actions = {}

export default store(state, updates, actions)
