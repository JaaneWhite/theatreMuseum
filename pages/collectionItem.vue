<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <breadCrumbs :bread-crumb-items="breadCrumbItems"/>
    </b-row>
    <b-row class="page-title">Афиша с исполнителями. Третья студия МХАТ (Студия Вахтангова). "Принцесса
      Турандот". 27 февраля 1922 г.</b-row>
    <b-row>
      <b-col cols="9" xl="6" class="image-col">
        <b-img src="~assets/img/posters/1-big.png" class="item-image"></b-img>
      </b-col>
      <b-col cols="3" xl="0" class="museum-title sm-scr">
          <b-link to="">
            Государственный центральный театральный музей имени А.А. Бахрушина
          </b-link>
      </b-col>
      <b-col cols="12" xl="6" class="info-col">
        <b-row class="museum-title bg-scr">
          <b-link to="">
          Государственный центральный театральный музей имени А.А. Бахрушина
          </b-link>
        </b-row>
        <b-row class="item-info" style="flex-direction: column">
          <p class="info-title">Описание экспоната:</p>
          <p class="info-text">Наименование: Афиша художественная с исполнителями</p>
          <p class="info-text">Спектакль: "Продавцы славы". Режиссеры - А.А. Гейрот, Б.М. Дмоховский. Художник - Н.П. Акимов. Музыка - Н.М. Стрельников</p>
        </b-row>
        <b-row class="item-info">
          <p class="info-title">Тип экспоната: &nbsp;</p>
          <p class="info-link"><b-link to="">афиша</b-link></p>
        </b-row>
        <b-row class="item-info">
          <p class="info-title">Год создания: &nbsp;</p>
          <p class="info-text">1992</p>
        </b-row>
        <b-row class="item-info">
          <p class="info-title">Материал, техника: &nbsp;</p>
          <p class="info-text">Бумага, печать</p>
        </b-row>
        <b-row class="item-info">
          <p class="info-title">Место создания: &nbsp;</p>
          <p class="info-text">Москва</p>
        </b-row>
        <b-row class="item-info">
          <p class="info-title">Номер по ГИК (КП): &nbsp;</p>
          <p class="info-text">КП 325105/55.АфС 37874</p>
        </b-row>
        <b-row class="item-info">
          <p class="info-title">Тематические группировки: &nbsp;</p>
          <p class="info-link"><b-link to="">Выставка "Предметы из фонда и программ ГЦТМ им. А.А. Бахрушина"</b-link></p>
        </b-row>


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
      breadCrumbItems: [
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
.item-image {
  max-width: 100%;
}
.museum-title {
  margin-bottom: 30px;
  font-size: 20px;
  padding: 0;
}
.item-info {
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 16px;
}

.museum-title a, .info-link a{
  font-weight: bold;
  text-decoration: underline;
  padding: 0;
}
.info-link {
  margin-bottom: 0;
}
.info-title {
  color: #9f959d;
  margin-bottom: 0;
}

.info-text{
  margin-bottom: 0;
}
.sm-scr {
  display: none;
}
@media (max-width: 1025px) {
  .bg-scr {
    display: none;
  }
  .sm-scr {
    display: flex;
    align-items: center;
  }
  .item-image {
    padding-right: 20px;
  }
}
</style>
