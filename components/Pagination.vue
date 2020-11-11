<template>
    <b-pagination
        v-model="currentPage"
        pills
        first-number
        last-number
        class="pagination"
        next-text=""
        next-class="pagination-next-button"
        prev-text=""
        prev-class="pagination-prev-button"
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