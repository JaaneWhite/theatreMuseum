<template>
  <b-navbar toggleable="lg" class="site-menu">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav fill>
        <b-nav-item to="/" class="menu-button">
          <b-img src="~assets/img/home.png" class="home-logo" alt="Home"></b-img>
        </b-nav-item>
        <b-nav-item to="/" class="menu-button">ТЕАТРАЛЬНЫЕ МУЗЕИ И АРХИВЫ</b-nav-item>
        <b-nav-item to="/" class="menu-button">ТЕАТРЫ</b-nav-item>
        <b-nav-item to="/" class="menu-button">ИМЕННОЙ УКАЗАТЕЛЬ</b-nav-item>
        <b-nav-item to="/" class="menu-button">ГЕОГРАФИЧЕСКИЙ УКАЗАТЕЛЬ</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  name: 'TopMenu'
}
</script>
<style scoped>



</style>