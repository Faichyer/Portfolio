<template>
  <div class="mx-auto container flex flex-col">
    <div class="flex flex-row space-x-24 mb-2">
      <div v-for="(category) in getCategories" :key="category.id" class="text-4xl py-2 px-4" :class="{ activecat: category.active }" @click="putActive(category.id)">
        <div v-if="category.active" class="text-white cursor-pointer">
          {{category.name}}
        </div>
        <div v-else class="text-gray-500 hover:text-white transition duration-500 ease-in-out cursor-pointer">
          {{category.name}}
        </div>
      </div>
    </div>
    <div v-if="getCategories.find(category => category.active === true).name === 'All work'" class="mt-16 w-full grid grid-cols-2">
      <div v-for="(project) in getProjects" :key="project.id">
        <project-tile
          :name="project.name"
          :img="project.img"
          :is-active="project.isActive"
          :technologies="project.technologies"
          :website="project.website"
        />
      </div>
    </div>
    <div v-else class="mt-8 w-full grid grid-cols-2">
      <div v-for="(project) in getProjects.filter(project => project.categorie === (getCategories.find(category => category.active === true).name))" :key="project.id">
        <project-tile
          :name="project.name"
          :img="project.img"
          :is-active="project.isActive"
          :technologies="project.technologies"
          :website="project.website"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapGetters, mapMutations } from 'vuex'
import ProjectTile from '~/components/ProjectTile.vue'

export default {
  components: {
    ProjectTile
  },
  computed: {
    ...mapGetters('projectList', ['getProjects', 'getSelectedProject']),
    ...mapGetters('categoryList', ['getCategories'])
  },
  methods: {
    ...mapMutations({
      putActive: 'categoryList/putActive'
    })
  }
}
</script>

<style>

</style>