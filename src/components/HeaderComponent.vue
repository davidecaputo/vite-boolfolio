<template>
    <header :class="store.display_none ? 'd-none' : ''">
        <div class="d-flex justify-content-between align-items-center text-danger h-100 mx-4">
            <div class="d-flex gap-4">
                <router-link :to="{ name: 'homepage' }">Homepage</router-link>
                <router-link :to="{ name: 'all-works' }">Tutti i lavori</router-link>
                <router-link :to="{ name: 'about-us' }">About Us</router-link>
            </div>
            <a href="http://127.0.0.1:8000/login">Accedi all'amministrazione</a>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped></style>