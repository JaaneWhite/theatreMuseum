<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <b-breadcrumb :items="items"></b-breadcrumb>
    </b-row>
    <b-row class="page-title">Персоны</b-row>
    <b-row>
      <b-col cols="3" class="menu-col">
        <b-row class="pagination-row">
          <pagination />
        </b-row>
        <b-nav vertical class="persons-menu">
          <b-nav-item class="c-menu-button">Абади Мартин</b-nav-item>
          <b-nav-item class="c-menu-button">Абадиев Бек</b-nav-item>
          <b-nav-item class="c-menu-button">Абакаров Ахмедхан</b-nav-item>
          <b-nav-item class="c-menu-button">Абасов Магомед Абасович (Абасил)</b-nav-item>
          <b-nav-item class="c-menu-button">Абашев Петр Тимофеевич</b-nav-item>
          <b-nav-item class="c-menu-button">Абашова Мария Юрьевна</b-nav-item>
          <b-nav-item class="c-menu-button">Аббасов Азат Зиннатович</b-nav-item>
          <b-nav-item class="c-menu-button">Абдиев Султан Назирович</b-nav-item>
          <b-nav-item class="c-menu-button">Абдоков Маталио Умарович</b-nav-item>
          <b-nav-item class="c-menu-button">Абдулов Гавриил Данилович</b-nav-item>
          <b-nav-item class="c-menu-button">Абдулов Александр</b-nav-item>
          <b-nav-item class="c-menu-button">Абдулхак Хамид Тархан</b-nav-item>
          <b-nav-item class="c-menu-button">Абдураззаков Барзу</b-nav-item>
        </b-nav>
        <b-row class="pagination-row">
          <pagination />
        </b-row>
      </b-col>
      <b-col cols="9">
        <b-row class="person-title">Брехт Бертольт</b-row>
        <b-row class="person-date">
          <p>(нем. Bertolt Brecht)</p>
          <p>(10 февраля 1898 - 14 августа 1956)</p>
        </b-row>
        <b-row class="person-text">Немецкий драматург, поэт, театральный деятель, теоретик театра, основатель театра "Берлинер ансамбль"</b-row>
        <b-row style="flex-direction: column">
          <b-row class="person-info">
            <p class="info-title">Роды занятий: &nbsp;</p>
            <p class="info-link"><b-link>Драматург</b-link>, <b-link>поэт</b-link></p>
          </b-row>
          <b-row class="person-info">
            <p class="info-title">Постоянная ссылка на данное описание: &nbsp;</p>
            <p class="info-link"><b-link></b-link></p>
          </b-row>
        </b-row>
        <b-tabs
            justified
        >
          <b-tab title="Экспонаты (95)">
            <b-row class="pagination-row">
              <pagination/>
            </b-row>
            <b-row class="person-row">
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont first-card">
                    <b-card-img src="~assets/img/persons/1.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text first-card"><b-link to="">Афиша с исполнителями. Москва, Государственный академический театр имени Евг. Вахтангова. "Пристань" Брехт Б., Бунин И.А., Достоевский Ф.М., Дюрренматт Ф.Й., Миллер А., Пушкин А.С., Де Филиппо Э. 11,12,13,23,24 ноября 2011 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont">
                    <b-card-img src="~assets/img/persons/2.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text "><b-link to="">Афиша с исполнителями. Москва, Московский театр Сатиры. "Мамаша Кураж и ее дети" Брехт Б. 17 мая, 5, 10, 13 июня 1972 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont last-card">
                    <b-card-img src="~assets/img/persons/3.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text last-card"><b-link to="">Афиша художественная. Москва, Московский театр драмы и комедии на Таганке. "Добрый человек из Сезуана" Брехт Б. 11.03.1969
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>

            </b-row>
            <b-row class="person-row">
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont first-card">
                    <b-card-img src="~assets/img/persons/1.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text first-card"><b-link to="">Афиша с исполнителями. Москва, Государственный академический театр имени Евг. Вахтангова. "Пристань" Брехт Б., Бунин И.А., Достоевский Ф.М., Дюрренматт Ф.Й., Миллер А., Пушкин А.С., Де Филиппо Э. 11,12,13,23,24 ноября 2011 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont">
                    <b-card-img src="~assets/img/persons/2.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text "><b-link to="">Афиша с исполнителями. Москва, Московский театр Сатиры. "Мамаша Кураж и ее дети" Брехт Б. 17 мая, 5, 10, 13 июня 1972 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont last-card">
                    <b-card-img src="~assets/img/persons/3.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text last-card"><b-link to="">Афиша художественная. Москва, Московский театр драмы и комедии на Таганке. "Добрый человек из Сезуана" Брехт Б. 11.03.1969
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>

            </b-row>
            <b-row class="person-row">
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont first-card">
                    <b-card-img src="~assets/img/persons/1.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text first-card"><b-link to="">Афиша с исполнителями. Москва, Государственный академический театр имени Евг. Вахтангова. "Пристань" Брехт Б., Бунин И.А., Достоевский Ф.М., Дюрренматт Ф.Й., Миллер А., Пушкин А.С., Де Филиппо Э. 11,12,13,23,24 ноября 2011 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont">
                    <b-card-img src="~assets/img/persons/2.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text "><b-link to="">Афиша с исполнителями. Москва, Московский театр Сатиры. "Мамаша Кураж и ее дети" Брехт Б. 17 мая, 5, 10, 13 июня 1972 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont last-card">
                    <b-card-img src="~assets/img/persons/3.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text last-card"><b-link to="">Афиша художественная. Москва, Московский театр драмы и комедии на Таганке. "Добрый человек из Сезуана" Брехт Б. 11.03.1969
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>

            </b-row>
            <b-row class="person-row">
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont first-card">
                    <b-card-img src="~assets/img/persons/1.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text first-card"><b-link to="">Афиша с исполнителями. Москва, Государственный академический театр имени Евг. Вахтангова. "Пристань" Брехт Б., Бунин И.А., Достоевский Ф.М., Дюрренматт Ф.Й., Миллер А., Пушкин А.С., Де Филиппо Э. 11,12,13,23,24 ноября 2011 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont">
                    <b-card-img src="~assets/img/persons/2.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text "><b-link to="">Афиша с исполнителями. Москва, Московский театр Сатиры. "Мамаша Кураж и ее дети" Брехт Б. 17 мая, 5, 10, 13 июня 1972 г.
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>
              <b-col cols="4" class="person-col">
                <b-card class="person-card">
                  <div class="person-card-img-cont last-card">
                    <b-card-img src="~assets/img/persons/3.png" top class="person-card-image">
                    </b-card-img>
                  </div>
                  <b-card-text class="person-card-text last-card"><b-link to="">Афиша художественная. Москва, Московский театр драмы и комедии на Таганке. "Добрый человек из Сезуана" Брехт Б. 11.03.1969
                    Государственный центральный театральный музей имени А. А. Бахрушина</b-link></b-card-text>
                </b-card>
              </b-col>

            </b-row>

          </b-tab>
          <b-tab title="Театры (17)"></b-tab>

        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "persons",
  data() {
    return {
      items: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Именной указатель',
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
.c-menu-button:hover a {
  color: #d78d5e !important;
}
.menu-col .pagination-row {
  text-align: left;
  margin: 0;
}

.person-title {
  font-size: 1.4vw;
  font-weight: bold;
  padding: 0;
  margin-bottom: 20px;
}
.person-date {
  font-weight: bold;
  flex-direction: column;
  margin-bottom: 20px;
}
.person-date p{
   margin-bottom: 0;
 }
.info-title {
  color: #9f959d;
  margin-bottom: 0;
}
.info-link {
  margin-bottom: 0;
}
.info-link a{
  font-weight: bold;
  text-decoration: underline;

}
.person-text {
  margin-bottom: 20px;
}
.person-info {
  text-align: left;
  margin: 0;
}
.person-col {
  padding: 0;
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
.c-menu-button:hover a {
  color: #d78d5e !important;
}

</style>