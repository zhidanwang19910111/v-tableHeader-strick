import directive from './v-table-header-strick'
const plugin = {
  install(_Vue) {
    _Vue.directive('table-header-strick', directive)
  },
  directive
}

export default plugin