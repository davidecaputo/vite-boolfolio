<template>
    <main>
        <h1>Homepage</h1>
    </main>
</template>

<script>
    import { store } from '../store';
    export default {
        data() {
            return {
                store
            }
        },
        mounted () {
            store.display_none = false;
        },
    }
</script>

<style lang="scss" scoped>

</style>