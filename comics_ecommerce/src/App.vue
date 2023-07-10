<template>
  <NavBar/>

  <router-view/>

  <FooterComp/>
</template>

<script>
// Importing components we need to reuse
import NavBar from './components/NavBar.vue'
import FooterComp from './components/FooterComp.vue';
export default{
  components: {
    NavBar,
    FooterComp,
  }
}

</script>

<style>

</style>
