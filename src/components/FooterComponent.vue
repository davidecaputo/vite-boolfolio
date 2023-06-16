<template>
    <footer :class="store.display_none ? 'd-none' : ''">
        <h1>Ciao</h1>
    </footer>
</template>

<script>
    import { store } from '../store';
    export default {
        data() {
            return {
                store            
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>