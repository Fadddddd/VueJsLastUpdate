<template>
    <div class="rendu">
        <!-- <h1>Voici le récapitulatif</h1>
        <h2> {{nomFormation}} !</h2>
        <h2> {{dateDebutFormation}} !!</h2>
        <h2> {{dateFinFormation}}</h2> -->
        <h2> {{$store.nomFormation}}</h2>
        <h2> {{$store.dateDebutFormation}}</h2>
        <h2> {{$store.dateFinFormation}}</h2>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'rendu',
    components: {
        HelloWorld
    }, 
    computed: {
        ...mapState(['nomFormation', "dateDebutFormation", "dateFinFormation"])  
        }
}
</script>
