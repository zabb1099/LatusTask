<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import JokesComponent from "./JokesComponent.vue";
    export default {
        components: {
            'JokesComponent': JokesComponent,
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
