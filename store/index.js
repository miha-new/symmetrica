import Vuex from 'vuex'
import { getCategories } from '@/assets/request.js'

export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, items) {
    state.categories = items
  }
}

export const actions = {
  async getCategories({commit}) {
    const categories = await getCategories()
    commit('setCategories', categories)
  },
  async nuxtServerInit({dispatch}) {
    await dispatch('getCategories')
  }
}