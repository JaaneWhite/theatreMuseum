<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-row>
    <b-row class="page-title">Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса
      Турандот". 27 февраля 1922 г.</b-row>
    <b-row>
      <b-col cols="6" class="image-col">
        <b-img src="~assets/img/posters/1-big.png"></b-img>
      </b-col>
      <b-col cols="6" class="info-col">

      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "collectionItem",
  layout: "default",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Коллекции',
          to: 'collections'
        },
        {
          text: 'Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса\n' +
              'Турандот". 27 февраля 1922 г.',
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.image-col {
  padding-left: 0;
}
</style>