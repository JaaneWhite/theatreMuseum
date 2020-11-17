<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <breadCrumbs :bread-crumb-items="breadCrumbItems"/>
    </b-row>
    <pageTitle :page-title-text="pageTitleText"></pageTitle>


    <b-row>
      <b-col cols="12" md="3" class="menu-col">
        <MenuList :menu-list-items="collectionMenuList" class="collection-menu-list"/>
        <b-dropdown
            :text="collectionMenuTitle"
            class="collection-Menu-dd"
            split
            toggle-class="list-button-dd"
            split-class="list-button">
          <b-dropdown-item-button
              class="collection-menu-button"
              v-for="menuItem in collectionMenuList"
              v-on:click="collectionMenuTitle = menuItem.text">
            {{menuItem.text}}
          </b-dropdown-item-button>
        </b-dropdown>

      </b-col>
      <b-col cols="12" md="9" class="collection-col">
        <b-row>
          <b-col cols="12" xl="6" class="collection-title">Афиши</b-col>
          <b-col cols="12" xl="6" class="collection-num">Показано экспонатов: 1-12 из 774</b-col>
        </b-row>
        <b-row class="pagination-row">
          <pagination/>
        </b-row>
        <b-row class="posters-row">

            <b-card class="poster-card" v-for="poster in posters">
              <div class="poster-card-img-cont">
              <b-card-img :src="poster.image" top class="poster-card-image">
              </b-card-img>
              </div>
              <b-card-text class="poster-card-text"><b-link to="collectionItem">{{poster.text}}</b-link></b-card-text>
            </b-card>
        </b-row>



      </b-col>
    </b-row>
  </b-container>


</template>

<script>
import Pagination from "~/components/Pagination";
import BreadCrumbs from "~/components/BreadCrumbs";
import PageTitle from "~/components/PageTitle";
import MenuList from "@/components/MenuList";

export default {
  name: "collections",
  components: {MenuList, Pagination, BreadCrumbs, PageTitle},
  layout: "default",
  data() {
    return {
      pageTitleText: 'Экспонаты',
      collectionMenuTitle: 'Афиши',
      breadCrumbItems: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Коллекции',
          active: true
        }
      ],
      collectionMenuList: [
        {text: "Афиши"},
        {text: "Декорации"},
        {text: "Документы, рукописи"},
        {text: "Здания театров и музеев"},
        {text: "Книги"},
        {text: "Костюмы, грим"},
        {text: "Куклы"},
        {text: "Награды"},
        {text: "Портреты"},
        {text: "Программы"},
        {text: "Реквизит, бутафория, предметы"},
        {text: "Скульптура"},
        {text: "Стенды"},
        {text: "Сцены из спектаклей"}
      ],
      posters: [
        {image: '~assets/img/posters/1.png', text: 'Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса Турандот". 27 февраля 1922 г.'},
        {image: '~assets/img/posters/2.png', text: 'Акимов Николай Павлович (1901-1968). Афиша художественная с исполнителями. Ленинград, Ленинградский Большой драматический театр. "Продавцы славы" Паньоль М., Нивуа П. 12, 14, 16, 21 января 1926'},
        {image: '~assets/img/posters/3.png', text: 'Акимов Николай Павлович (1901-1968). Афиша художественная. Ленинград, Государственный академический театр драмы. "Радость" Щеглов Д.А. 17 декабря 1931 г.'},
        {image: '~assets/img/posters/1.png', text: 'Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса Турандот". 27 февраля 1922 г.'},
        {image: '~assets/img/posters/2.png', text: 'Акимов Николай Павлович (1901-1968). Афиша художественная с исполнителями. Ленинград, Ленинградский Большой драматический театр. "Продавцы славы" Паньоль М., Нивуа П. 12, 14, 16, 21 января 1926'},
        {image: '~assets/img/posters/3.png', text: 'Акимов Николай Павлович (1901-1968). Афиша художественная. Ленинград, Государственный академический театр драмы. "Радость" Щеглов Д.А. 17 декабря 1931 г.'},
      ]
    }
  }
}
</script>

<style scoped>
.main-content {
  padding-left: 15px;
  padding-right: 15px;
}
.menu-col {
  border-right: solid #270000 1px;
  padding: 0;
}

.collection-col {
  padding-left: 30px;
}

.collection-title {
  font-size: 26px;
  font-weight: bold;
  padding: 0;
}


.collection-num {
  text-align: right;
  font-size: 16px;
  color: #9f959d;
  line-height: 2;
}


.pagination-row {
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;

}


.posters-row {
  margin-bottom: 30px;
  margin-left: 15px;
  padding: 0;
}
.poster-card {
  border: none;
  border-radius: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

}
.poster-card .card-body {
  padding: 0;
  text-align: center;
}
.poster-card-img-cont {
  background-color: #f5f2ec;
  width: 16vw;
  height: 16vw;
  min-height: 190px;
  min-width: 190px;
  padding: 0;
  display: flex;
  margin: auto;

}

.poster-card-image {
  object-fit: contain;

}
.poster-card-text {

  width: 16vw;
  min-width: 190px;
  max-height: 180px;
  overflow: hidden;
  margin: 15px auto auto;
  text-align: left;
}
.poster-card-text a{
  font-size: 16px;
  color: #270000 !important;
  font-weight: bold;
  text-decoration: underline;
  line-height: 1.625;

}
.poster-card-text:hover a{
  color: #d78d5e !important;
}

@media (max-width: 1025px) {
  .collection-num {
    text-align: left;
    padding: 0;
  }
}
/* Мобильная версия 0-767 px */
@media (max-width: 767px) {
  .collection-menu-list {
    display: none;
  }
  .collection-Menu-dd {
    width: 100%;
    border: solid #cf6a40 3px;
  }
  .menu-col {
    border: none;
  }
  .collection-col {
    padding-left: 0;
    padding-top: 30px;
  }
  .collection-title {
    font-size: 20px;
  }
  .posters-row {
    margin-left: 0px;

  }
  .poster-card-img-cont {
    min-height: 130px;
    min-width: 130px;
  }
  .poster-card-text {
    width: 16vw;
    min-width: 130px;
    max-height: 130px;

  }

}



</style>