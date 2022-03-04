import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      pseudo: "",
      password: "",
      nomFormation: "",
      dateDebutFormation: "",
      dateFinFormation:""
    }
  },
  mutations: {
    setPseudo (state, pseudo) {
      console.error("setting pseudo", pseudo)
      state.pseudo = pseudo
    },
    setPassword (state, password) {
      console.error("setting password", password)
      state.password = password
    },
    setnomFormation(state, nomFormation) {
      console.error("setting formation", nomFormation)
      state.nomFormation = nomFormation
    },
    setdateDebutFormation(state, dateDebutFormation) {
      console.error("setting dateDebutFormation", dateDebutFormation)
      state.dateDebutFormation = dateDebutFormation
    },
    setdateFinFormation(state, dateFinFormation) {
      console.error("setting dateFinFormation", dateFinFormation)
      state.dateFinFormation = dateFinFormation
    }
  }
});

const app = createApp(App)

app.use(store);

app.mount("#app")


// Différence entre js et php --> Asynchrone 
// Js lance l'ensemble u code d'un coup et PHP le lit dans l'ordre d'écriture.