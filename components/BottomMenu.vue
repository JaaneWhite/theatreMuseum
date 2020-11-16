<template>
<div>

    <b-nav class="site-menu menu-lg" fill>

          <b-nav-item to="/" class="menu-button">О&nbsp;ПРОЕКТЕ</b-nav-item>
          <b-nav-item to="/" class="menu-button">АВТОРЫ</b-nav-item>
          <b-nav-item to="/" class="menu-button">УЧАСТНИКИ</b-nav-item>
          <b-nav-item to="/" class="menu-button">ПАРТНЕРЫ</b-nav-item>
          <b-nav-item to="/" class="menu-button">МУЗЕЙНОЕ ЗАКОНОДАТЕЛЬСТВО</b-nav-item>
          <b-nav-item to="/" class="menu-button">КОНТАКТЫ</b-nav-item>

    </b-nav>

  <b-row class="menu-sm">
    <b-col class="menu-sm-col">
    <b-button to="/" class="menu-button">О&nbsp;проекте</b-button>
    </b-col>
    <b-col class="menu-sm-col">
    <b-button to="/" class="menu-button">Партнеры</b-button>
    </b-col>
  </b-row>
  <b-row class="menu-sm">
    <b-col class="menu-sm-col">
    <b-button to="/" class="menu-button">Авторы</b-button>
    </b-col>
    <b-col class="menu-sm-col">
      <b-button to="/" class="menu-button">Музейное <br> законодательство</b-button>
    </b-col>
  </b-row>
  <b-row class="menu-sm">
    <b-col class="menu-sm-col">
    <b-button to="/" class="menu-button">Участники</b-button>
    </b-col>
      <b-col class="menu-sm-col">
    <b-button to="/" class="menu-button">Контакты</b-button>
      </b-col>
  </b-row>

</div>
</template>
<script>
export default {
  name: 'BottomMenu'
}
</script>
<style scoped>
.menu-sm {

  margin: 0;
  display: none;
}
.menu-sm-col {
  height: 48px;
  display: flex;
  padding: 0;

}
.menu-sm-col .menu-button {
  width: 100%;
  margin: auto;
  padding: 0;
  align-items: center;
  display: grid;
  border: solid white 1px;
  text-transform: none;
}

@media (max-width: 577px) {
  .menu-lg {
    display: none;
  }
  .menu-sm {
    display: flex;
  }
}

</style>

