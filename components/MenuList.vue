<template>
  <b-nav vertical class="collection-menu" :items="menuListItems">


    <b-nav-item class="c-menu-button" v-for="menuItem in menuListItems">{{menuItem.text}}</b-nav-item>

  </b-nav>
</template>
<script>
export default {
  name: 'MenuList',
  props: {
    menuListItems: {},
  }
}
</script>
<style scoped>
.c-menu-button {
  margin: 0;
  padding-bottom: 6px;
}

.c-menu-button a {
  padding-left: 0;
}

.c-menu-button:hover a {
  color: #d78d5e !important;
}



</style>