<template>
  <main class="bg-black d-flex flex-column justify-content-center vh-100">
    <ErrorNotFound />
  </main>
</template>

<script>
import ErrorNotFound from '../components/ErrorNotFound.vue'
export default {
      components: {
        ErrorNotFound,
      },
      data(){
        return{

        }
      }
    }
</script>

<style lang="scss" scoped>
</style>