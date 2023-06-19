<template>
    <main>
        <div class="container d-flex flex-column align-items-center gap-2 py-3">
            <h1 class="text-center">Prodotto</h1>
            <div class="card w-50 rounded-5" v-if="work">
                <img :src="work.image" :alt="work.name" class="p-2 rounded-5 bg-success">
                <div class="card-body">
                    <p>{{ work.name }}</p>
                    <p>{{ work.description }}</p>
                    <p v-if="work.type">{{ work.type.name }}</p>
                    <p v-for="language in work.languages">{{ language.name }}</p>
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
                work: null,
                apiUrl: 'http://127.0.0.1:8000/api'
            }
        },
        methods: {
            getData(){
                axios.get(`${this.apiUrl}/works/${this.$route.params.slug}`).then((el) => {
                    console.log(el);
                    this.work = el.data.results;
                });
            }
        },
        mounted () {
            this.getData();
            // console.log(this.$route);
            // console.log(this.$router);
        },
    }
</script>

<style lang="scss" scoped>

</style>