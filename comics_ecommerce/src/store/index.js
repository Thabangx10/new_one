import { createStore } from 'vuex'
// Fetch our data
const dataUrl = ('https://thabangx10.github.io/Comics_data/data/')

export default createStore({
  state: {
    comics : null,
  },
  getters: {
  },
  mutations: {
    setComics(state, comics){
      state.comics = comics
    },
  },
  actions: {
    // Fetching our data
    async fetchComics(context){
        let response = await fetch(dataUrl);
        // Perfoming some deconstruction to target our 'comics' key
        let {comics} = await response.json();
        context.commit("setComics", comics);
      },

      // fetch('https://thabangx10.github.io/Comics_data/data/', {
      //   method: 'POST',

      //   headers: {
      //     'Content-type' : 
      //   }
      // })
    },
  modules: {
  }
})
