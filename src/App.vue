<template>
  <v-app app>
    <app-nav-bar></app-nav-bar>
    <v-content dark class="grey lighten-2">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
import NavbarVue from './components/Navbar.vue';

export default {
  name: 'App',
  components:{
    appNavBar: NavbarVue
  },
  data: () => ({
    //
  }),
};
</script>
