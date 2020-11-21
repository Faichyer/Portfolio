<template>
  <div>
    <Intro />
    <Projects class="md:mt-32"/>
    <Footer />
  </div>
</template>

<script>
import Intro from '~/components/Intro.vue'
import Projects from '~/components/Projects.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Intro,
    Projects,
    Footer
  }
}
</script>

<style scoped>

</style>
