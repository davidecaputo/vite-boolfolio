<template>
  <h1 class="text-center">{{ title }}</h1>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: 'Lavori',
      works: [],
      apiUrl: 'http://127.0.0.1:8000/api'
    }
  },
  methods: {
    getData(){
      axios.get(`${this.apiUrl}/works`).then((el) => {
        console.log(el.data.results.data);
        this.works = el.data.results.data;
      })
    }
  },
  mounted() {
    this.getData();
  }
}
</script>

<style lang="scss" scoped></style>