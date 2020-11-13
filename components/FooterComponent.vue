<template>
  <footer>
    <b-row class="menu-row">
      <b-container class="menu-row-container bottom-menu">
        <BottomMenu/>
      </b-container>
    </b-row>
    <b-container class="footer-links">
      <b-row class="footer-links-1">
        <b-col cols="12" md="4" xl="2" class="footer-link">
          <b-link href="">Программа грантов Президента РФ в области культуры и искусства</b-link>
        </b-col>
        <b-col cols="0" xl="4" class="footer-text f-t-1">
          <b-row>&copy Государственный центральный театральный музей имени А.А. Бахрушина</b-row>
          <b-row>&copy АЛЬТ-СОФТ</b-row>
        </b-col>
        <b-col cols="4" md="2" xl="2" class="footer-img">
          <b-img src="~assets/img/footer/minkult.png"></b-img>
        </b-col>
        <b-col cols="4" md="3" xl="2" class="footer-img">
          <b-img src="~assets/img/footer/bahr.png"></b-img>
        </b-col>
        <b-col cols="4" md="3" xl="2" class="footer-img">
          <b-img src="~assets/img/footer/altsoft.png"></b-img>
        </b-col>
      </b-row>
      <b-row class="footer-text f-t-2">&copy Государственный центральный театральный музей имени А.А. Бахрушина</b-row>
      <b-row class="footer-text f-t-2">&copy АЛЬТ-СОФТ</b-row>
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
.footer-img {
  height: 80px;
  display: grid;
  align-items: center;
  padding: 3px;
}
.footer-img img {
  margin: auto;
}
.footer-links-1 {
  margin-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: solid #d3c2a2 1px;

}
.footer-link a{
  text-decoration: underline;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.571;
}
.footer-text {
  font-size: 14px;
  line-height: 1.714;
}
.f-t-2 {
  display: none;
}
@media (max-width: 1025px) {
  .footer-links {
    margin-bottom: 30px;
  }
  .f-t-1 {
    display: none;
  }
  .f-t-2 {
    display: block;
    text-align: center;

  }
}
@media (max-width: 577px) {
  .bottom-menu {
    background-color: white;
  }
  .footer-link {
    text-align: center;
    font-size: 14px;
    margin-bottom: 30px;
  }


}
</style>
