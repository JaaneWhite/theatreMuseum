<template>
  <footer>
    <b-row class="menu-row">
      <b-container class="menu-row">
        <BottomMenu/>
      </b-container>
    </b-row>
    <b-container class="footer-links">
      <b-row>
        <b-col cols="2" class="footer-link">
          <b-link href="">Программа грантов Президента РФ в области культуры и искусства</b-link>
        </b-col>
        <b-col cols="4" class="footer-text">
          <b-row>&copy Государственный центральный театральный музей имени А.А. Бахрушина</b-row>
          <b-row>&copy АЛЬТ-СОФТ</b-row>
        </b-col>
        <b-col cols="2" class="footer-img">
          <b-img src="~assets/img/footer/minkult.png"></b-img>
        </b-col>
        <b-col cols="2" class="footer-img">
          <b-img src="~assets/img/footer/bahr.png"></b-img>
        </b-col>
        <b-col cols="2" class="footer-img">
          <b-img src="~assets/img/footer/altsoft.png"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </footer>

</template>

<script>
import BottomMenu from "~/components/BottomMenu";

export default {
  name: "FooterComponent",
  components: {BottomMenu}
}
</script>

<style scoped>
.footer-links {
  margin-top: 30px;
}
.footer-link a{
  text-decoration: underline;
  font-weight: bold;
}
</style>
