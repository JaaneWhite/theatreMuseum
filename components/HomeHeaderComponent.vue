<template>
  <header>
    <b-row class="header-carousel-row">
      <b-col cols="12" xl="6" class="header-left">

      </b-col>
      <b-col cols="12" xl="6" class="header-right">
      <b-carousel class="header-carousel"
          id="carousel-1"
          v-model="slide"
          :interval="4000"
      >
        <b-carousel-slide class="slide-img"
            img-src="~assets/img/slider-1.png">
        </b-carousel-slide>
        <b-carousel-slide class="slide-img"
            img-src="~assets/img/slider-2.png">
        </b-carousel-slide>
        <b-carousel-slide class="slide-img"
            img-src="~assets/img/slider-3.png">
        </b-carousel-slide>

      </b-carousel>
    </b-col>


    </b-row>
    <div class="header-title-block">
      <b-container >
        <b-row>
          <b-col cols="12" xl="7" style="padding: 0">
            <b-row class="project-text ver-lg">Проект осуществлён на средства гранта Президента Российской Федерации. Программа для поддержки творческих проектов
            общенационального значения в области культуры и искусства области культуры.</b-row>
            <b-row class="ver-sm">
              <b-col cols="10" class="project-text">
              </b-col>
              <b-col cols="2">
              </b-col>
            </b-row>
            <b-col></b-col>
            <b-row class="title-text">ТЕАТРАЛЬНЫЕ МУЗЕИ И АРХИВЫ РОССИИ И РУССКОГО ЗАРУБЕЖЬЯ</b-row>

        </b-col>
          <b-col cols="12" xl="5" style="padding: 0">
            <b-row>
              <b-col cols="0" xl="4"></b-col>
              <b-col cols="12" xl="8" class="search-block">
                <b-form class="search-form">
                  <b-form-input id="search-input" placeholder="Поиск" type="search"></b-form-input>
                  <b-button class="search-button keyboard-button"></b-button>
                  <b-img src="~assets/img/divider.png" class="divider-img"></b-img>
                  <b-button class="search-button sb-button"></b-button>
                </b-form>
              </b-col>
            </b-row>
            <b-row class="link-row">
              <b-col cols="0" xl="4" style="padding: 0"></b-col>
              <b-col cols="6" xl="6" style="padding: 0"><b-link to="#" class="search-link">Расширенный поиск</b-link></b-col>
              <b-col cols="6" xl="2" class="right-link" style="padding: 0"><b-link to="#" class="search-link">А-Я</b-link></b-col>
            </b-row>


        </b-col>
        </b-row>
      </b-container>
    </div>
    <div  class="menu-block">
      <top-menu />
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
  background-image: url("~assets/img/header bg.png") !important;
  height: 23vw;
}
.header-left {
  padding: 0;

}
.header-right {
  display: flex;
  text-align: right;
  padding: 0;
}
.header-carousel {
  height: 100%;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
}
.slide-img {

}
.header-title-block {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;

}
.project-text {
  margin-top: 2vw;
  font-size: 14px;
  color: white;
  line-height: 1.714;
  text-align: left;
}




.title-text {
  margin-top: 3vw;
  color: white;
  font-size: 36px;
  line-height: 1.389;
}


.search-block {
  display: flex;
  text-align: right;
  padding: 0;
}
.search-form {
  text-align: right;
  display: flex;
  margin-right: 0;
  margin-left: 0;
  margin-top: 2vw;
  width: 100%;
  border-radius: 25px;
  opacity: 75%;
  height: 2vw;
  padding: 0 20px 0 10px;
  background-color: white;

}
.search-form:active, .search-form:focus, .search-form:hover {
  opacity: 100%;
}
.search-button {
  background-color: transparent;
  border: none;
  background-repeat: no-repeat;
  background-position: center;
}
.keyboard-button {
  background-image: url("~assets/img/keyboard.png");
}
.sb-button {
  background-image: url("~assets/img/search.png");

}
.sb-button:active, .sb-button:hover, .sb-button:focus {
  background-image: url("~assets/img/search r.png");
}
.divider-img {
  margin: 5px;

}
#search-input {
  color: #31112C !important;
  height: 100%;
  font-style: italic;
  font-size: 14px;
  line-height: 1.2;
  border: none;
  box-shadow: none;
  background-color: transparent;
}
.link-row {
  margin-top: 10px;
  padding: 0;
}
.search-link{
  color: white !important;
  text-decoration: none;
  border-bottom: dotted 2px;
  font-size: 14px;
  line-height: 2.143;
  text-shadow: 0 0 1px rgba(39, 0, 0, 0.004);
}
.right-link {
  text-align: right;
}
.menu-block {
  display: none;
}
@media (max-width: 1025px) {
  .header-right {
    display: none;
  }
  .header-carousel-row {
    height: 48vw;
  }
  .project-text {
    text-align: center;
    margin-top: 4vw;
  }
  .title-text {
    text-align: center;
    margin-top: 10vw;
  }
  .search-form {
    margin-right: 15%;
    margin-left: 15%;
    margin-top: 5vw;
    height: 4vw;
  }
  .link-row {
    margin-right: 15%;
    margin-left: 15%;

  }
  .keyboard-button, .divider-img {
    display: none;
  }

}
.ver-sm {
  display: none;
}


@media (max-width: 569px) {
  .header-carousel-row {
    height: 428px;
  }
  .ver-lg {
    display: none;
  }
  .ver-sm {
    display: flex;
    padding: 0;
  }
  .project-text {
    text-align: left;
    padding: 0;
  }
  .menu-block {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    text-align: right;
    padding: 0;
    z-index: 50;
  }

  .menu-row {
  display: none;
}
  .title-text {
    font-size: 22px;
    text-align: left;
    margin-top: 120px;
    margin-bottom: 50px;
  }
  .search-form {
    margin-left: 0;
    margin-right: 0;
    height: 44px;
  }
  .link-row {
    margin-left: 0;
    margin-right: 0;
  }

}
@media (max-width: 470px) {
  .project-text {
    font-size: 10px;
  }

}

</style>