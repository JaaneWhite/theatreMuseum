<template>
  <div>
    <b-row class="pagination-row">
      <b-pagination
          v-model="currentPage"
          pills
          first-number
          last-number
          class="pagination"
          :total-rows="rows"
          :per-page="perPage"
          :aria-controls="paginationAreaControls"
      ></b-pagination>
    </b-row>

    <b-list-group class="persons-menu" id="listMenunav">
      <b-list-group-item
          class="c-menu-button"
          v-for="person in personlist"
          :key="person.name"
          :to="person.link"
          :per-page="perPage"
          :current-page="currentPage">
        {{ person.name }}
      </b-list-group-item>
    </b-list-group>
    <b-row class="pagination-row">
      <b-pagination
          v-model="currentPage"
          pills
          first-number
          last-number
          class="pagination"
          :total-rows="rows"
          :per-page="perPage"
          :aria-controls="paginationAreaControls"
      ></b-pagination>
    </b-row>
  </div>
</template>
<script>
export default {
  name: 'listMenu',
  data() {
    return {
      currentPage: 1,
      perPage: 3,
      paginationAreaControls: "listMenunav",
      personlist: [
        {name: 'Абади Мартин', link: 'persons'},
        {name: 'Абадиев Бек', link: 'persons'},
        {name: 'Абакаров Ахмедхан', link: 'persons'},
        {name: 'Абасов Магомед Абасович (Абасил)', link: 'persons'},
        {name: 'Абашеев Петр Тимофеевич', link: 'persons'},
        {name: 'Абашова Мария Юрьевна', link: 'persons'},
        {name: 'Аббасов Азат Зиннатович', link: 'persons'},
        {name: 'Абдиев Султан Назирович', link: 'persons'},
        {name: 'Абдоков Маталио Умарович', link: 'persons'},
        {name: 'Абдулгапуров Хайбула Абдулович', link: 'persons'},
        {name: 'Абдуллаев Кемал Джан-Бахиш оглы', link: 'persons'},
        {name: 'Абдуллаев Шахмардан Гасан-Гусейнович', link: 'persons'},
        {name: 'Абдуллин Азат Хамматович', link: 'persons'},
        {name: 'Абдулмуслимова Сапият', link: 'persons'},
        {name: 'Абдулов Александр', link: 'persons'},
        {name: 'Абдулов Гавриил Данилович', link: 'persons'},
        {name: 'Абдулхак Хамид Тархан', link: 'persons'},
        {name: 'Абдулхаликов Махмуд Абдулхаликович', link: 'persons'},
        {name: 'Абдураззаков Барзу', link: 'persons'},
        {name: 'Абелева-Таганова Нателла Матвеевна', link: 'persons'},
        {name: 'Абэ, Кобо', link: 'persons'},
        {name: 'Авалиани Ной Иванович', link: 'persons'},
        {name: 'Аверин Андрей Викторович', link: 'persons'},



      ]
    }
  },
  computed: {
    rows() {
      return this.personlist.length
    }
    }

}

</script>
<style scoped>
.c-menu-button {
  padding-left: 0;
  border: none;
}
.c-menu-button:hover {
  color: #d78d5e !important;
}

</style>