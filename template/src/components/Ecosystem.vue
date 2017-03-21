<template>
    <ul>
      <li v-for="link in links"><a :href="link.uri" target="_blank">{{link.label}}</a></li>
    </ul>
</template>

<script>
    import { connect } from 'vuelm'
    import ecosysStore from 'store/ecosystem'

    const Ecosystem = {
        name: 'ecosystem',

        data() {
            return { links: [] }
        }
    }

    export default connect(Ecosystem, { ecosysStore })
</script>
