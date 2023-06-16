<template>
  <HeaderComponent />
  <main class="bg-body-secondary">
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
</style>