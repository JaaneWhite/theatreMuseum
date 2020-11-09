<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-row>
    <b-row class="page-title">Экспонаты</b-row>
    <b-row>
      <b-col cols="3" class="menu-col">
        <b-nav vertical class="collection-menu">
          <b-nav-item to="#afi" exact exact-active-class="active" class="c-menu-button">Афиши</b-nav-item>
          <b-nav-item class="c-menu-button">Декорации</b-nav-item>
          <b-nav-item class="c-menu-button">Документы, рукописи</b-nav-item>
          <b-nav-item class="c-menu-button">Книги</b-nav-item>
          <b-nav-item class="c-menu-button">Костюмы, грим</b-nav-item>
          <b-nav-item class="c-menu-button">Куклы</b-nav-item>
          <b-nav-item class="c-menu-button">Награды</b-nav-item>
          <b-nav-item class="c-menu-button">Портреты</b-nav-item>
          <b-nav-item class="c-menu-button">Программы</b-nav-item>
          <b-nav-item class="c-menu-button">Реквизит, бутафория, предметы</b-nav-item>
          <b-nav-item class="c-menu-button">Скульптура</b-nav-item>
          <b-nav-item class="c-menu-button">Стенды</b-nav-item>
          <b-nav-item class="c-menu-button">Сцены из спектаклей</b-nav-item>
        </b-nav>
      </b-col>
      <b-col cols="9">
        <b-row>
          <b-col cols="6" class="collection-title">Афиши</b-col>
          <b-col cols="6" class="collection-num">Показано экспонатов: 1-12 из 774</b-col>
        </b-row>
        <b-row class="pagination-row">
          <pagination/>

        </b-row>

      </b-col>
    </b-row>
  </b-container>




</template>

<script>
import Pagination from "~/components/Pagination";
export default {
  name: "collections",
  components: {Pagination},
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
          active: true
        }
      ]
    }
  }
}
</script>

<style scoped>
.menu-col {
  border-right: solid #270000 1px;
  padding: 0;
}
.c-menu-button a {
  padding-left: 0;
}
.collection-title {
  font-size: 1vw;
  font-weight: bold;
}
.collection-num {
  text-align: right;
}
.pagination-row {
  text-align: center;
}
</style>