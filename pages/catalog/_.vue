<template>
  <div class="container"></div>
</template>

<script>
  export default {
    validate({params, store}) {
      return store.state.categories.find(item => params.pathMatch === item.url)
    }
  }
</script>