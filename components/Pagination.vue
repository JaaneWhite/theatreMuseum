<template>
  <b-row class="pagination">
    <b-pagination
        v-model="currentPage"
        pills
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number

    ></b-pagination>
  </b-row>
</template>
<script>
export default {
  name: 'pagination',
  data() {
    return {
      rows: 100,
      currentPage: 1
    }
  }
}
</script>
<style scoped>
.page-item.disabled .page-link, .page-link, .page-item:hover .page-link {
  color: black;
  background-color: transparent;
  border-color: transparent;
  font-size: 16px;
  font-family: Roboto;
}
.page-item.active .page-link {
  color: white;
  background-color: #aad1c9;
  border: none;
  font-size: 16px;
  font-family: Roboto;
}
</style>