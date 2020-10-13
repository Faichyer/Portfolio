export const state = () => ({
  projects: [
    { id: 0, name: 'Amihan', description: 'Amihan Travel Tours is a company that organises all-in trips to different destinations ', date: '2020', img: 'Amihan.jpg', website: '', repo: '', categorie: 'Web', isActive: true, point: true, technologies: ['Vue', 'Node.js', 'Trello'] },
    { id: 1, name: 'WelcHome Immobilier', description: 'lorem ipsum', date: '2018', img: 'Welchome.jpg', website: '', repo: '', categorie: 'Web', isActive: false, point: false, technologies: ['React', 'Firebase'] },
    { id: 2, name: 'Agence Mof', description: 'lorem ipsum', date: '2019', img: 'Mof.jpg', website: '', repo: '', categorie: 'Marketing', isActive: false, point: false, technologies: ['Flutter', 'Firebase', 'Angular'] },
    { id: 3, name: 'BDE Ynov Lyon', description: 'lorem ipsum', date: '2015', img: 'appli-bde.jpg', website: '', repo: '', categorie: 'Mobile', isActive: false, point: false, technologies: ['Flutter', 'Node.js', 'REST API'] },
    { id: 4, name: 'Project Martin', description: 'lorem ipsum', date: '2020', img: 'Martin.jpg', website: '', repo: '', categorie: 'Mobile', isActive: false, point: false, technologies: ['Nuxt', 'GraphQL', 'MongoDB', 'Node.JS', 'Express'] }
  ]
})

export const getters = {
  getProjects: (state) => {
    const getProjects = state.projects.map((project) => {
      return {
        id: project.id,
        name: project.name,
        description: project.description,
        date: project.date,
        img: project.img,
        website: project.website,
        repo: project.repo,
        categorie: project.categorie,
        isActive: project.isActive,
        point: project.point,
        technologies: project.technologies
      }
    })
    return getProjects
  },
  getSelectedProject: (state) => {
    const selectedProject = state.projects.find(project => project.point === true)
    return selectedProject
  }
}

export const mutations = {
  putActive (state, payload) {
    for (let i = 0; i <= payload; i++) {
      state.projects[i].isActive = true
    }

    for (let i = payload + 1; i <= state.projects.length - 1; i++) {
      state.projects[i].isActive = false
    }

    state.projects.forEach((project) => {
      project.point = false
    })

    state.projects[payload].point = true
  }
}
