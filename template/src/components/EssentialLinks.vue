<template>
    <ul>
        <li v-for="link in links"> <a :href="link.uri" target="_blank">{{link.label}}</a> </li>
    </ul>
</template>

<script>
    import { connect } from 'vuelm'
    import essentialStore from 'store/essential'
    
    const EssentialLinks = {
        name: 'essential-links',

        data() {
            return {
                links: []
            }
        }
    }

    export default connect(EssentialLinks, { essentialStore })
</script>
