<template>
  <ErrorNotFound />
</template>

<script>
import ErrorNotFound from '../components/ErrorNotFound.vue'
export default {
      components: {
        ErrorNotFound,
      },  
    }
</script>

<style lang="scss" scoped>
h1{
  color: red;
}
header.prova{
  display: none;
}
</style>