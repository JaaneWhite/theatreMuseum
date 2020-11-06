<template>

    <b-navbar toggleable="lg" class="site-menu">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav fill>
          <b-nav-item to="/" class="menu-button">О ПРОЕКТЕ</b-nav-item>
          <b-nav-item to="/" class="menu-button">АВТОРЫ</b-nav-item>
          <b-nav-item to="/" class="menu-button">УЧАСТНИКИ</b-nav-item>
          <b-nav-item to="/" class="menu-button">ПАРТНЕРЫ</b-nav-item>
          <b-nav-item to="/" class="menu-button">МУЗЕЙНОЕ ЗАКОНОДАТЕЛЬСТВО</b-nav-item>
          <b-nav-item to="/" class="menu-button">КОНТАКТЫ</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

</template>
<script>
export default {
  name: 'BottomMenu'
}
</script>

