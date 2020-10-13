export const state = () => ({
  categories: [
    { id: 0, name: 'All work', active: true },
    { id: 1, name: 'Web', active: false },
    { id: 2, name: 'Mobile', active: false },
    { id: 3, name: 'Marketing', active: false }
  ]
})

export const getters = {
  getCategories: (state) => {
    const getCategories = state.categories.map((category) => {
      return {
        id: category.id,
        name: category.name,
        active: category.active
      }
    })
    return getCategories
  }
}

export const mutations = {
  putActive (state, payload) {
    state.categories.forEach((category) => {
      category.active = false
    })
    state.categories[payload].active = true
  }
}
