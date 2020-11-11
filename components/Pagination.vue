<template>
    <b-pagination
        v-model="currentPage"
        pills
        first-number
        last-number
        class="pagination"
    ></b-pagination>
</template>
<script>
export default {
  name: 'pagination',
  data() {
    return {
      currentPage: 1
    }
  }
}
</script>
<style scoped>

</style>