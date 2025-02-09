<template>
<div>
    <button
        @click="getJokes"
        class="btn btn-primary">
        Generate Me Three Jokes
    </button>
        <ul>
            <li v-for="joke in jokes" :key="joke.id">{{ joke.setup }} : <b>{{ joke.punchline }}</b></li>
        </ul>
</div>
</template>

<script>
export default {
    name: 'JokesComponent',
    data() {
        return {
            jokes: {}
        }
    },

    methods: {
        //Get Jokes via the api route call
        getJokes() {
            axios.get('/api/jokes', {
            })
                .then((res) => {
                    this.jokes = res.data;
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }
}

</script>
