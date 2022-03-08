<template>
  <div>
    <Header />
    <Master />
    <button v-on:click="say('accueil')">accueil</button>
    <button v-on:click="say('apropos')">apropos</button>
    <button v-on:click="say('mentionLegale')">mentionLegale</button>
    <button v-on:click="say('connexion')">connexion</button>
    <button v-on:click="say('Rendu')">Rendu</button>

    <Accueil v-if="pageMenu == 'accueil'"/>
    <Apropos v-if="pageMenu == 'apropos'"/>
    <MentionLegale v-if="pageMenu == 'mentionLegale'"/>
    <Formulaire v-if="pageMenu == 'formulaire'"/>
    <Connexion v-if="pageMenu == 'connexion'"/>
    <Rendu v-if="pageMenu=='Rendu'"/>
    <Footer />

  </div>
</template>

<script>
import Master from './pages/Master.vue'
import Accueil from './pages/Accueil.vue'
import Apropos from './pages/Apropos.vue'
import MentionLegale from './pages/MentionLegale.vue'
import Connexion from './pages/Connexion.vue'
import Header from './template/Header'
import Footer from './template/Footer'
import Formulaire from './pages/Formulaire'
import Rendu from './pages/Rendu'
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    Accueil,
    Apropos,
    MentionLegale,
    Connexion,
    Master,
    Header,
    Footer,
    Formulaire,
    Rendu,
  },
  data(){
    return{
      pageMenu : 'accueil',
      plop :""
    }
  },
/* state() {
    return {
      nomFormation,
      dateDebutFormation,
      dateFinFormation
    }
  }, */
  //Ecoute les valeurs qui changent
  computed: {
    ...mapState(["pseudo"]),
    ...mapState(["nomFormation"]), 
    ...mapState(["dateDebutFormation"]), 
    ...mapState(["dateFinFormation"])
  },

  methods: {
      say: function (message) {
        this.pageMenu = (message)
      },
  },

//Surveille si la valeur change
  watch: {
      pseudo: function(nouveauPseudo){
        // if(this.pseudo!="") ==> if(this.pseudo)
        if(nouveauPseudo!=""){
          this.pageMenu='formulaire'
        }
    },
    nomFormation: function(nouvelleFormation){
      if(nouvelleFormation!=""){
        this.nomFormation = nomFormation
      }
    },
    dateDebutFormation : function (nouvelledateDebutFormation){
      if(nouvelledateDebutFormation!=""){
        this.dateDebutFormation = dateDebutFormation
      }
    },
    dateFinFormation : function (nouvelledateFinFormation){
      if(nouvelledateFinFormation!=""){
        this.dateFinFormation = dateFinFormation
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
