<template>
  <b-navbar toggleable="md" class="site-menu" :class="togExp">
    <b-navbar-brand class="menu-text" :class="togExp">Портал создан на средства гранта Президента
      Российской Федерации для поддержки
      творческих проектов общенационального
      значения в области культуры и искусства</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse" v-on:click="switchCollapse()"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav fill>
        <b-nav-item to="/" class="menu-button">
          <b-img src="~assets/img/home.png" class="home-logo" alt="Home"></b-img>
          <div class="menu-button-text">Главная</div>
        </b-nav-item>
        <b-nav-item to="/" class="menu-button">Театральные музеи и архивы</b-nav-item>
        <b-nav-item to="/" class="menu-button">Театры</b-nav-item>
        <b-nav-item to="persons" class="menu-button">Именной указатель</b-nav-item>
        <b-nav-item to="/" class="menu-button">Географический указатель</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'TopMenu',
  data() {
    return {
      menuExpanded: false,
      togExp: 'collapsed'
    }
  },
  methods: {
    switchCollapse: function () {
      if (this.menuExpanded == false) {
        this.togExp = 'not-collapsed';
        this.menuExpanded = true;
      }
      else {
        this.togExp = 'collapsed';
        this.menuExpanded = false;
      }
    }
  }
}
</script>
<style scoped>
.menu-text {
  display: none;
}
.menu-button-text {
  display: none;
}
/* Мобильная версия 0 - 767 px*/
@media (max-width: 767px) {
  .menu-text {
    display: flex;
    font-size: 10px;
    white-space: normal;
    text-align: left;
    align-items: center;
    width: 75%;
    padding-left: 15px;
    min-height: 85px;
  }
  .site-menu {
    padding-top: 15px;
  }
  .site-menu.collapsed {
    background: transparent;
  }
  .site-menu.not-collapsed {
    height: 100%;
  }
  .menu-text.collapsed {
    color: white;
  }

  .menu-button {
    width: 100%;
    text-align: left;
    padding-left: 30px;
    text-transform: none;
    border-bottom: solid #cdc1a2 1px;
  }
  .home-logo {
    display: none
  }
  .menu-button-text {
    display: block;
  }
}
/* Планшетная версия 768 - 992 px*/
@media (max-width: 991px) {

}

</style>