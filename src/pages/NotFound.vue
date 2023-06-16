<template>
  <main class="bg-black d-flex flex-column justify-content-center vh-100">
    <ErrorNotFound />
  </main>
</template>

<script>
import ErrorNotFound from '../components/ErrorNotFound.vue'
import { store } from '../store';
export default {
      components: {
        ErrorNotFound,
      },
      data(){
        return{
          store
        }
      },
      mounted () {
        store.display_none = true;
      },
    }
</script>

<style lang="scss" scoped>
</style>