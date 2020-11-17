<template>
  <b-container class="main-content">
    <b-row class="breadcrumb-row">
      <breadCrumbs :bread-crumb-items="breadCrumbItems"/>
    </b-row>
    <pageTitle :page-title-text="pageTitleText"></pageTitle>
    <b-row>
      <b-col cols="3" class="menu-col">
        <Pagination
            :total-rows="personNameListRows"
            :pagination-area-controls="personListPaginationAreaControls"
            :per-page="personNameListPerPage"/>
        <MenuList :menu-list-items="personlist" id="person-name-list"/>

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
            <p><b-link class="info-link">Драматург</b-link>, <b-link class="info-link">поэт</b-link></p>
          </b-row>
          <b-row class="person-info">
            <p class="info-title">Постоянная ссылка на данное описание: &nbsp;</p>
            <p class="info-link"><b-link class="info-link" to="persontype">http://theatre-museum.ru/object/2472680</b-link></p>
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
import BreadCrumbs from "@/components/BreadCrumbs";
import PageTitle from "~/components/PageTitle";
import Pagination from "@/components/Pagination";
import MenuList from "@/components/MenuList";
export default {
  name: "persons",
  components: {MenuList, Pagination, BreadCrumbs, ListMenu, PageTitle},
  data() {
    return {
      pageTitleText: 'Персоны',
      personListPaginationAreaControls: 'person-name-list',
      personNameListPerPage: '20',
      breadCrumbItems: [
        {
          text: 'Главная',
          to: '/'
        },
        {
          text: 'Именной указатель',
          active: true
        }
      ],
      personlist: [
        {text: 'Абади Мартин', link: 'persons'},
        {text: 'Абадиев Бек', link: 'persons'},
        {text: 'Абакаров Ахмедхан', link: 'persons'},
        {text: 'Абасов Магомед Абасович (Абасил)', link: 'persons'},
        {text: 'Абашеев Петр Тимофеевич', link: 'persons'},
        {text: 'Абашова Мария Юрьевна', link: 'persons'},
        {text: 'Аббасов Азат Зиннатович', link: 'persons'},
        {text: 'Абдиев Султан Назирович', link: 'persons'},
        {text: 'Абдоков Маталио Умарович', link: 'persons'},
        {text: 'Абдулгапуров Хайбула Абдулович', link: 'persons'},
        {text: 'Абдуллаев Кемал Джан-Бахиш оглы', link: 'persons'},
        {text: 'Абдуллаев Шахмардан Гасан-Гусейнович', link: 'persons'},
        {text: 'Абдуллин Азат Хамматович', link: 'persons'},
        {text: 'Абдулмуслимова Сапият', link: 'persons'},
        {text: 'Абдулов Александр', link: 'persons'},
        {text: 'Абдулов Гавриил Данилович', link: 'persons'},
        {text: 'Абдулхак Хамид Тархан', link: 'persons'},
        {text: 'Абдулхаликов Махмуд Абдулхаликович', link: 'persons'},
        {text: 'Абдураззаков Барзу', link: 'persons'},
        {text: 'Абелева-Таганова Нателла Матвеевна', link: 'persons'},
        {text: 'Абэ, Кобо', link: 'persons'},
        {text: 'Авалиани Ной Иванович', link: 'persons'},
        {text: 'Аверин Андрей Викторович', link: 'persons'},
      ]
    }
  },
  computed: {
    personNameListRows() {
      return this.personlist.length
  }
}
}
</script>

<style scoped>
.menu-col {
  border-right: solid #270000 1px;
  padding: 0;
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
  font-weight: bold;
  text-decoration: underline;
  margin-bottom: 0;
}
.person-text {
  margin-bottom: 20px;
}
.person-info, .person-info p {
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
.info-link:hover{
  color: #d78d5e !important;
}

</style>