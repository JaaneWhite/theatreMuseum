<template>
  <b-row class="page-title">{{pageTitleText}}</b-row>
</template>
<script>
export default {
  name: 'pageTitle',
  props: {
    pageTitleText: {}
  }
}
</script>
<style scoped>
.page-title {
  font-size: 36px;
  margin-bottom: 30px;
  margin-top: 20px;
  font-weight: bold;
  line-height: 1.389;
}
/* Мобильная версия 0-767 px */
@media (max-width: 767px) {
  .page-title {
    font-size: 24px;
  }
}

</style>