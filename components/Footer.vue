<template>
  <div class="mx-auto flex flex-col container relative">
    <div class="text-2xl text-white">
      Say Hi : 
    </div>
    <a href="mailto:miki.namsrai@gmail.com" class="text-6xl text-white hover:text-purple-700 cursor-pointer mt-16">
      Email
    </a>
    <a href="https://www.linkedin.com/in/mikinamsrai/" class="text-6xl text-white hover:text-purple-700 cursor-pointer">
      LinkedIn
    </a>
    <a href="https://www.instagram.com/miki.nsr" class="text-6xl text-white hover:text-purple-700 cursor-pointer">
      Instagram
    </a>
    <div class="absolute bottom-0 text-white flex flex-row">
      Built with <img :src="require(`@/assets/images/favicon.png`)" class="w-6 ml-2 mr-2"/> by Miki Namsrai
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>

</style>