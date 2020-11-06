<template>
  <header>
    <b-row class="header-carousel-row">
      <b-col class="header-left">

      </b-col>
      <b-col class="header-right">
      <b-carousel class="header-carousel"
          id="carousel-1"
          v-model="slide"
          :interval="4000"
      >
        <b-carousel-slide class="slide-img"
            img-src="../assets/img/header_img01.png">
        </b-carousel-slide>
        <b-carousel-slide class="slide-img"
            img-src="../assets/img/header_img02.jpg">
        </b-carousel-slide>
        <b-carousel-slide class="slide-img"
            img-src="../assets/img/header_img03.jpg">
        </b-carousel-slide>

      </b-carousel>
    </b-col>


    </b-row>
    <div class="header-title-block">
      <b-container >
        <b-col>
          <b-row class="project-text"></b-row>
          <b-row class="title-text">ТЕАТРАЛЬНЫЕ МУЗЕИ И АРХИВЫ РОССИИ И РУССКОГО ЗАРУБЕЖЬЯ</b-row>

        </b-col>
        <b-col>

        </b-col>
      </b-container>
    </div>

  <b-row class="menu-row">
    <b-container class="menu-row">
      <TopMenu/>
    </b-container>
  </b-row>
  </header>
</template>

<script>
import TopMenu from "@/components/TopMenu";

export default {
  name: "HomeHeaderComponent",
  components: {TopMenu}
}
</script>

<style scoped>
.header-carousel-row {

  background-image: url('~assets/img/header bg.png');
  height: 475px;
  z-index: 0;
}
.header-right {
  display: flex;
  text-align: right;
}
.header-carousel {
  position: absolute;
  right: 0;
  top: 0;
}
.slide-img {
  height: 475px;
  width: 980px;
}
.header-title-block {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
  border: solid black 1px;

}
.title-text {
  color: white;
  font-size: 20px;
  font-weight: bold;
}

</style>