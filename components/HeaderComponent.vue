<template>
  <header>
  <b-row class="header-row">
    <b-container>
      <b-row>
        <b-col cols="12" xl="7" style="padding: 0">
          <b-row class="title-text">ТЕАТРАЛЬНЫЕ МУЗЕИ И АРХИВЫ РОССИИ <br>И РУССКОГО ЗАРУБЕЖЬЯ</b-row>
        </b-col>
        <b-col cols="12" xl="1" style="padding: 0"></b-col>
        <b-col cols="12" xl="4" class="search-block" style="padding: 0">
          <b-row class="search-row">
          <b-form class="search-form">
            <b-form-input id="search-input" placeholder="Поиск" type="search"></b-form-input>
            <b-button class="search-button keyboard-button"></b-button>
            <b-img src="~assets/img/divider.png" class="divider-img"></b-img>
            <b-button class="search-button sb-button"></b-button>
          </b-form>
          </b-row>
          <b-row class="link-row">
            <b-col cols="9" class="left-link"><b-link to="#" class="search-link">Расширенный поиск</b-link></b-col>
            <b-col cols="3" class="right-link"><b-link to="#" class="search-link">А - Я</b-link></b-col>
          </b-row>
        </b-col >
      </b-row>
    </b-container>

    </b-row>

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
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
.header-row {
  background-image: url("~assets/img/header bg.png");
}
.title-text {
  margin-top: 3.5vw;
  margin-bottom: 3.5vw;
  color: white;
  font-size: 36px;
  line-height: 1.389;
}
.search-block {
  display: flex;
  text-align: right;
  flex-direction: column;
  margin-top: 4vw;
}
.search-row {
  margin: 0;
}
.search-form {
  text-align: right;
  display: flex;
  margin-right: 0;
  margin-left: 0;
  width: 100%;
  border-radius: 25px;
  opacity: 75%;
  height: 2.3vw;
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
  margin: 10px 0 0;
  text-align: left;

}
.search-link{
  color: white !important;
  text-decoration: none;
  border-bottom: dotted 2px;
  font-size: 14px;
  line-height: 2.143;
  text-shadow: 0 0 1px rgba(39, 0, 0, 0.004);
}
.left-link {
  padding: 0;
}
.right-link {
  text-align: right;
  padding: 0;
}
.menu-block {
  display: none;
}
@media (max-width: 1025px) {

  .title-text {
    text-align: center;
    margin-top: 10vw;
  }
  .search-block {
    margin-top: 0;
    margin-bottom: 4vw;
  }
  .search-form {
    margin-right: 15%;
    margin-left: 15%;
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
/* Мобильная версия 0 - 767 px*/
@media (max-width: 767px) {
  .header-row {
    height: 428px;
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

</style>