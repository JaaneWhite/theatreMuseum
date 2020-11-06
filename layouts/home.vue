<template>
  <div>
    <home-header-component />
    <Nuxt />
    <footer-component />
  </div>
</template>


<script>
import HomeHeaderComponent from "@/components/homeHeaderComponent";
import FooterComponent from "@/components/footerComponent";
export default {
  name: 'home',
  components: {FooterComponent, HomeHeaderComponent}
}
</script>

<style scoped>

</style>