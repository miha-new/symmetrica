<template>
  <div
    v-if="categories.length"
    class="menu-catalog"
    :class="{open}"
  >
    <div
      class="catalog-control"
      @click="open = !open"
    >
      Каталог
    </div>
    <div
      v-if="open"
      class="catalog-content"
    >
      <div
        class="catalog-item"
        v-for="(category, index) in categories"
        :key="index"
      >
        <nuxt-link
          class="catalog-link"
          :to="`/catalog/${category.url}`"
        >
          {{category.name}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    props: ['categories'],
    data: () => ({
      open: true
    })
  }
</script>

<style scoped>
  .menu-catalog {
    text-align: left;
    font-size: 16px;
    line-height: 150%;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    border: 1px solid #cfd8dc;
    user-select: none;
  }
  .menu-catalog .catalog-control {
    position: relative;
    font-weight: 700;
    padding: 5px 10px;
    cursor: pointer;
  }
  .menu-catalog .catalog-control::after {
    content: '';
    position: absolute;
    top: calc(50% - 7px);
    right: 10px;
    width: 10px;
    height: 10px;
    transform: rotate(-45deg);
    border-left: 2px solid gray;
    border-bottom: 2px solid gray;
  }
  .menu-catalog .catalog-content {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .menu-catalog .catalog-link {
    position: relative;
    display: block;
    padding: 5px 10px;
    color: #000;
    text-decoration: none;
    transition: background-color .25s, color .25s;
    cursor: pointer;
  }
  .menu-catalog .catalog-link:hover,
  .menu-catalog .catalog-link.nuxt-link-exact-active {
    background-color: #004ba0;
    color: #fff;
  }
  .menu-catalog.open .catalog-control::after {
    transform: rotate(135deg);
  }
</style>