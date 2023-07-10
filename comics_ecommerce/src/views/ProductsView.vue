<template>
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi magni id
      cupiditate, quasi nobis eos.
    </p>
    <br /><br />
    <button @click="getComics">Click For Available Comics</button>
  </div>
  <br /><br />
  <div v-for="comic in comics" :key="comic.id">
    <h2>{{ comic.title }} - {{ comic.img }} - {{ comic.writer }}</h2>
    <p>{{ comic.summary }}</p>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      comics: [],
    };
  },
  methods: {
    getComics() {
      fetch("https://thabangx10.github.io/Comics_data/data/")
        .then((response) => response.json())
        .then((data) => {
          this.comics = data.comics;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
};
</script>
  
<style scoped>

</style>
  