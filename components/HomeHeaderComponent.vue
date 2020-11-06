<template>
  <header>
  <b-row class="header-carousel">
    <b-col class="header-left">

    </b-col>
    <b-col class="header-right">
      <b-carousel
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
.header-carousel {
  background-image: url('~assets/img/header bg.png');
  height: 475px;
}
.header-right {
  display: flex;
  text-align: right;
}
.slide-img {
  height: 475px;
  width: 980px;
}


</style>