import { action, observable } from 'mobx'
import * as pages from 'pages/config'
import netlifyIdentity from 'netlify-identity-widget'

// Declaracao de dados
const dados = {
  isAuthenticated: false,
  userName: '',
  user: null,
}

const design = {
  layout: null,
  orientation: 'landscape',
  scroll: 0,
  scrollSegment: null,
}

const rotas = {
  currentPage: null,
  availablePages: [],
}

// const rota = {
//   alias: '',
//   path: '',
//   label: ''
// }

// Declaracao de dominios

// Declaracao da store
const store = observable({
  dados,
  design,
  rotas,

  inicializarStore () {
    window.g = {
      store: this
    }
    this.inicializarDesign()
    this.inicializarRotas()
  },

  // Metodos de autenticacao
  inicializarIdentity () {
    netlifyIdentity.init()
    const self = this
    const currentUser = netlifyIdentity.currentUser()
    this.populateUserData(currentUser)
    netlifyIdentity.on('login', user => {
      self.populateUserData(user)
      netlifyIdentity.close()
    })
    netlifyIdentity.on('logout', () => {
      self.populateUserData()
      netlifyIdentity.close()
    })
  },

  populateUserData (user) {
    this.dados.isAuthenticated = !!user
    this.dados.userName = user?.user_metadata.full_name
    this.dados.user = user
  },

  openIdentityPanel () {
    netlifyIdentity.open()
  },

  authenticate (callback) {
    netlifyIdentity.open()
  },

  signout (callback) {
    netlifyIdentity.logout()
  },

  // Métodos de dados
  
  // Metodos de rotas

  inicializarRotas () {
    this.rotas.availablePages = Object.values(pages)
    this.updatePaginaAtual()
  },

  updatePaginaAtual () {
    const paginaAtual = Object.values(pages)
      .find(x => window.location.pathname.match(x.path))
    this.rotas.currentPage = {...paginaAtual}
  },

  // Métodos de design

  updateScreenSize () {
    const { innerHeight: height, innerWidth: width } = window
    const orientation = height > width
      ? 'portrait'
      : 'landscape'
    let layout
    if (width >= 1400) layout = 'desktop'
    else if (width >= 1100) layout = 'laptop'
    else if (width >= 500) layout = 'tablet'
    else layout = 'mobile'

    Object.assign(this.design, {
      height,
      layout,
      orientation,
      width,
    })
  },

  updateScrolling () {
    const scroll = Math.round(window.scrollY)
    const scrollSegment = scroll < 80 ? 'header' : 'body'
    Object.assign(this.design, {
      scroll,
      scrollSegment,
    })
  },

  inicializarDesign () {
    this.updateScreenSize()
    this.updateScrolling()
    window.addEventListener('resize', this.updateScreenSize)
    window.addEventListener('scroll', this.updateScrolling)
  },
}, {
  authenticate: action.bound,
  inicializarDesign: action.bound,
  inicializarIdentity: action.bound,
  populateUserData: action.bound,
  updatePaginaAtual: action.bound,
  updateScreenSize: action.bound,
  updateScrolling: action.bound,
  inicializarRotas: action.bound,
  inicializarStore: action.bound,
  signout: action.bound,
})

window.store = store

export default store