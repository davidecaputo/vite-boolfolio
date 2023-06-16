<template>
    <header>
        <div class="d-flex justify-content-between align-items-center text-danger h-100 mx-4">
            <div class="d-flex gap-4">
                <router-link :to="{ name: 'homepage' }">Homepage</router-link>
                <router-link :to="{ name: 'all-works' }">Tutti i lavori</router-link>
                <router-link :to="{ name: 'about-us' }">About Us</router-link>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
</style>