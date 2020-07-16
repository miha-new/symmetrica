import Vuex from 'vuex'
import { getCatalog } from '@/assets/request.js'

export const state = () => ({
  catalog: [],
  currCatalogCategory: undefined
})

export const getters = {
  catalogCategories(state) {
    let categories
    if (state.currCatalogCategory) {
      categories = state.catalog.filter(item => state.currCatalogCategory.category_id === item.parent_id)
      if (!categories.length) {
        categories = state.catalog.filter(item => state.currCatalogCategory.parent_id === item.parent_id)
      }
    } else {
      categories = state.catalog.filter(item => !item.parent_id)
    }
    return categories
  }
}

export const mutations = {
  setCatalog(state, items) {
    state.catalog = items
  },
  setСurrCatalogCategory(state, item) {
    state.currCatalogCategory = item
  }
}

export const actions = {
  async getCatalog({commit}) {
    const catalog = await getCatalog()
    commit('setCatalog', catalog)
  },
  async nuxtServerInit({dispatch}) {
    await dispatch('getCatalog')
  }
}