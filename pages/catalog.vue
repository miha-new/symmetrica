<template>
  <div class="container">
    <nuxt-link
      v-if="goToBackUrl"
      class="btn-back"
      :to="goToBackUrl"
    >
      Назад
    </nuxt-link> 
    <menu-catalog :categories="categories" />
  </div>
</template>

<script>
  export default {
    validate({params, store}) {
      const currCatalogCategory = store.state.catalog.find(item => {
        return params.pathMatch === item.url
      })
      store.commit('setСurrCatalogCategory', currCatalogCategory)
      return !params.pathMatch || currCatalogCategory
    },
    asyncData({ store, params }) {
      const currentCategory = store.state.currCatalogCategory
      const categories = store.getters.catalogCategories

      let parentCategory
      let goToBackUrl
      if (currentCategory) {
        parentCategory = store.state.catalog.find(item => {
          return currentCategory.parent_id === item.category_id
        })
        goToBackUrl = `/catalog/${parentCategory ? parentCategory.url : ''}`
      }

      return {
        categories,
        goToBackUrl
      }
    },
    data: () => ({
      categories: [],
      goToBackUrl: undefined
    })
  }
</script>

<style scoped>
  .btn-back {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    text-decoration: none;
    border: none;
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 4px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out;
    margin-bottom: 10px;
    background-color: #004ba0;
    color: #fff;
    cursor: pointer;
  }
</style>