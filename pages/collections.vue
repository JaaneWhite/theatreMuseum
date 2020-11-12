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
          <b-nav-item class="c-menu-button">Здания театров и музеев</b-nav-item>
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
      <b-col cols="9" class="collection-col">
        <b-row>
          <b-col cols="6" class="collection-title">Афиши</b-col>
          <b-col cols="6" class="collection-num">Показано экспонатов: 1-12 из 774</b-col>
        </b-row>
        <b-row class="pagination-row">
          <pagination/>
        </b-row>
        <b-row class="posters-row">
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont first-card">
              <b-card-img src="~assets/img/posters/1.png" top class="poster-card-image">
              </b-card-img>
              </div>
              <b-card-text class="poster-card-text first-card"><b-link to="collectionItem">Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса Турандот". 27 февраля 1922 г.</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont">
              <b-card-img src="~assets/img/posters/2.png" top class="poster-card-image">
              </b-card-img>
              </div>
              <b-card-text class="poster-card-text"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная с исполнителями. Ленинград, Ленинградский Большой драматический театр. "Продавцы славы" Паньоль М., Нивуа П. 12, 14, 16, 21 января 1926</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont last-card">
              <b-card-img src="~assets/img/posters/3.png" top class="poster-card-image">
              </b-card-img>
              </div>
              <b-card-text class="poster-card-text last-card"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная. Ленинград, Государственный академический театр драмы. "Радость" Щеглов Д.А. 17 декабря 1931 г.</b-link></b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="posters-row">
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont first-card">
                <b-card-img src="~assets/img/posters/1.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text first-card"><b-link to="">Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса Турандот". 27 февраля 1922 г.</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont">
                <b-card-img src="~assets/img/posters/2.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная с исполнителями. Ленинград, Ленинградский Большой драматический театр. "Продавцы славы" Паньоль М., Нивуа П. 12, 14, 16, 21 января 1926</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont last-card">
                <b-card-img src="~assets/img/posters/3.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text last-card"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная. Ленинград, Государственный академический театр драмы. "Радость" Щеглов Д.А. 17 декабря 1931 г.</b-link></b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="posters-row">
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont first-card">
                <b-card-img src="~assets/img/posters/1.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text first-card"><b-link to="">Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса Турандот". 27 февраля 1922 г.</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont">
                <b-card-img src="~assets/img/posters/2.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная с исполнителями. Ленинград, Ленинградский Большой драматический театр. "Продавцы славы" Паньоль М., Нивуа П. 12, 14, 16, 21 января 1926</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont last-card">
                <b-card-img src="~assets/img/posters/3.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text last-card"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная. Ленинград, Государственный академический театр драмы. "Радость" Щеглов Д.А. 17 декабря 1931 г.</b-link></b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="posters-row">
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont first-card">
                <b-card-img src="~assets/img/posters/1.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text first-card"><b-link to="">Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса Турандот". 27 февраля 1922 г.</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont">
                <b-card-img src="~assets/img/posters/2.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная с исполнителями. Ленинград, Ленинградский Большой драматический театр. "Продавцы славы" Паньоль М., Нивуа П. 12, 14, 16, 21 января 1926</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="4" class="poster-col">
            <b-card class="poster-card">
              <div class="poster-card-img-cont last-card">
                <b-card-img src="~assets/img/posters/3.png" top class="poster-card-image">
                </b-card-img>
              </div>
              <b-card-text class="poster-card-text last-card"><b-link to="">Акимов Николай Павлович (1901-1968). Афиша художественная. Ленинград, Государственный академический театр драмы. "Радость" Щеглов Д.А. 17 декабря 1931 г.</b-link></b-card-text>
            </b-card>
          </b-col>
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
.c-menu-button {
  margin: 0;
  padding-bottom: 6px;
}

.c-menu-button a {
  padding-left: 0;
}
.c-menu-button:hover a {
  color: #d78d5e !important;
}
.collection-col {
  padding-left: 30px;
}

.collection-title {
  font-size: 1.4vw;
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

}
.pagination {
  margin-top: 20px;
  margin-bottom: 30px;
}
.poster-col {
  padding: 0;
}
.posters-row {
  margin-bottom: 30px;
}

.poster-card {
  border: none;
  border-radius: 0;
  padding: 0;
}
.poster-card .card-body {
  padding: 0;
  text-align: center;
}
.poster-card-img-cont {
  background-color: #f5f2ec;
  width: 16vw;
  height: 16vw;
  padding: 0;
  display: flex;
  margin: auto;

}

.poster-card-image {
  object-fit: contain;

}
.poster-card-text {

  width: 16vw;
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
.first-card {
  margin-left: 0;
}
.last-card {
  margin-right: 0;
}



</style>