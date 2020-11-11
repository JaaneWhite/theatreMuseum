<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-row>
    <b-row class="page-title">Байрон Джордж Гордон</b-row>
    <b-row class="person-date">
      <p>(англ. George Gordon Byron (Noel))</p>
      <p>(22 января 1788 года, Лондон — 19 апреля 1824 года, Миссолунги, Османская Греция)</p>
    </b-row>
    <b-row class="person-text">Английский поэт-романтик. Наряду с Перси Шелли и Джоном Китсом представляет младшее поколение британских романтиков. Его альтер-эго Чайльд-Гарольд стал прототипом бесчисленных байронических героев в литературе разных стран Европы.</b-row>
    <b-row style="flex-direction: column">
      <b-row class="person-info">
        <p class="info-title">Роды занятий: &nbsp;</p>
        <p><b-link class="info-link">Драматург</b-link>, <b-link class="info-link">поэт</b-link></p>
      </b-row>
      <b-row class="person-info">
        <p class="info-title">Постоянная ссылка на данное описание: &nbsp;</p>
        <p class="info-link"><b-link class="info-link" to="persontype">http://theatre-museum.ru/object/2472680</b-link></p>
      </b-row>
    </b-row>
    <b-tabs justified class="person-tabs">
      <b-tab title="Экспонаты (48)">
        <b-row class="pagination-row">
          <pagination/>
        </b-row>
        <b-row class="person-row">
          <b-col cols="3" class="person-col">
            <b-card class="person-card">
              <div class="person-card-img-cont first-card">
                <b-card-img src="~assets/img/persons/1-1.png" top class="person-card-image">
                </b-card-img>
              </div>
              <b-card-text class="person-card-text first-card"><b-link to="">Афиша сводная с фотоизображением. Краснодар, Театр балета Юрия Григоровича. "Корсар" Адан А., Делиб Л., Дриго Р., Пуни Ц., Мазилье Ж., Сен-Жорж Ж.-А.; Балет. "Спартак" Хачатурян А.И., Волков Н.Д.; "Раймонда" ...</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="3" class="person-col">
            <b-card class="person-card">
              <div class="person-card-img-cont">
                <b-card-img src="~assets/img/persons/1-2.png" top class="person-card-image">
                </b-card-img>
              </div>
              <b-card-text class="person-card-text"><b-link to="">Вальц (?) Карл Федорович (1846-1929). Эскиз декорации. Пятая картина. Море. Москва, Императорский Большой театр. "Корсар" (?) (Балетмейстер Богданов А.Н., художник Вальц К.Ф.). 1880-е гг.</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="3" class="person-col">
            <b-card class="person-card">
              <div class="person-card-img-cont">
                <b-card-img src="~assets/img/persons/1-3.png" top class="person-card-image">
                </b-card-img>
              </div>
              <b-card-text class="person-card-text"><b-link to="">Книга. Поэма «Корсар» Дж.Байрон (Paris, 1892 г.). Любимый томик Р. Нуреева. Дар музею театра В.Т. Спивакова</b-link></b-card-text>
            </b-card>
          </b-col>
          <b-col cols="3" class="person-col">
            <b-card class="person-card">
              <div class="person-card-img-cont last-card">
                <b-card-img src="~assets/img/persons/1-4.png" top class="person-card-image">
                </b-card-img>
              </div>
              <b-card-text class="person-card-text last-card"><b-link to="">Левенталь Валерий Яковлевич (1938-2015). Эскиз декорации. Площадь. Москва, Государственный академический Большой театр СССР. "Корсар" (Постановка 1994 г. Балетмейстер Григорович Ю.Н., дирижер Сорокин П.Ш.). 1993 г.</b-link></b-card-text>
            </b-card>
          </b-col>
        </b-row>


      </b-tab>
      <b-tab title="Театры (2)"></b-tab>
      <b-tab title="Музеи (1)"></b-tab>
    </b-tabs>

  </b-container>
</template>

<script>
export default {
  name: "persontype",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Именной указатель',
          to: 'persons'
        },
        {
          text: 'Байрон Джордж Гордон',
          active: 'true'
        }
      ]
    }
  }
}
</script>

<style scoped>

.person-date {
  font-size: 20px;
  line-height: 1.6;
  flex-direction: column;
  margin-bottom: 30px;
}


.person-date p{
  margin-bottom: 0;
}
.info-title {
  color: #9f959d;
  margin-bottom: 0;
}

.info-link {
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 0;
}
.info-link:hover{
  color: #d78d5e !important;
}
.person-text {
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.778;
  text-align: justify;
}



.person-info, .person-info p {
  text-align: left;
  margin: 0 0 5px;
}
.person-tabs {
  margin-top: 35px;
}
.person-row {
  margin-bottom: 30px;
}

.person-card {
  border: none;
  border-radius: 0;
  padding: 0;
}
.person-card .card-body {
  padding: 0;
  text-align: center;
}
.person-card-img-cont {
  background-color: #f5f2ec;
  width: 16vw;
  height: 16vw;
  padding: 0;
  display: flex;
  margin: auto;

}

.person-card-image {
  object-fit: contain;

}
.person-card-text {

  width: 16vw;
  margin: 30px auto auto;
  text-align: left;
  max-height: 180px;
  overflow: hidden;
}
.person-card-text a{
  font-size: 16px;
  color: #270000 !important;
  font-weight: bold;
  text-decoration: underline;
  line-height: 1.625;


}
.person-card-text:hover a{
  color: #d78d5e !important;
}
.first-card {
  margin-left: 0;
}
.last-card {
  margin-right: 0;
}

</style>