import createStore from '../utils/createStore'

const [useRoutes, load] = createStore()

load('pages', {
    current: null,
    available: []
})

// load('current', null)
// load('available', [])

export default useRoutes