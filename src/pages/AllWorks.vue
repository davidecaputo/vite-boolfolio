<template>
  <main>
    <div class="container">
      <h1 class="text-center m-4">{{ title }}</h1>
      <div class="row">
        <div class="col" v-for="work in works" :key="work.id">
          <div class="card h-100 rounded-5">
            <img :src="work.image" :alt="work.name" class="card-img-top p-1 rounded-5 bg-success">
            <div class="card-body">
              <h4>{{ work.name }}</h4>
              <p>{{ work.description }}</p>
              <p v-if="work.type">{{ work.type.name }}</p>
              <router-link :to="{ name: 'single-work', params: { slug: work.slug } }" class="btn btn-primary">Dettagli</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
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
    getData() {
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