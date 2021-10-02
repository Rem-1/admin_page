<template>
  <section>
    <Header id="header"/>
    <MainSection/>
    <Footer/>
  </section>
</template>

<script>
import Header from "./components/Header.vue"
import MainSection from "./components/MainSection.vue"
import Footer from "./components/Footer.vue"

export default {
  name: "App",
  components: {
      Header,
      MainSection,
      Footer,
  },
}
</script>

<style scoped>
  #app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #E5E5E5;
  }

  #header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
</style>
