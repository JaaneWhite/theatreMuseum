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
  font-size: 2vw;
  margin-bottom: 30px;
  margin-top: 20px;
  font-weight: bold;
  line-height: 1.389;
}

</style>