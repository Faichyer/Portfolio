<template>
  <div @mouseover="hover = true" @mouseleave="hover = false">
    <figure class="relative float-left overflow-hidden text-center">
      <img :src="require(`@/assets/images/${img}`)" class="w-screen">
      <figcaption v-show="hover" class="flex flex-col justify-center absolute left-0 w-full h-full bg-background uppercase top-auto bottom-0 p-4 transform transition delay-1000 ease-in">
        <h2 class="capitalize m-0 font-semibold text-xl text-white font-title">
          {{ name }}
        </h2>
        <div>
          <h3 v-for="(technology, index) in technologies" :key="technology" class="inline font-thin font-title text-purple-700">
            {{ technology }}
            <span v-if="index != Object.keys(technologies).length - 1 ">/</span>
          </h3>
        </div>
        <a :href="website" class="cursor-pointer mt-12 mx-16 transition duration-500 ease-in-out transform bg-transparent font-title hover:bg-purple-900 text-purple-700 font-thin hover:text-white py-2 px-4 border border-purple-900 hover:border-transparent">
          LEARN MORE
        </a>
      </figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Project Name'
    },
    img: {
      type: String,
      default: ''
    },
    website: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    technologies: {
      type: Array,
      default: () => ['tech', 'tech']
    }
  },
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style>
figcaption {
  -webkit-backface-visibility: hidden;backface-visibility: hidden;
}
</style>
