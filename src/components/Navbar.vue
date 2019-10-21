<template>
  <nav>
    <v-app-bar flat app class="grey lighten-4">
      <v-toolbar-title class="grey--text text-uppercase">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- Dropdown menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in links" :key="i" router :to="item.route">
            <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Logout button -->
      <v-toolbar-items right>
        <v-btn text small color="grey">
          Log out
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <!-- Left drawer on the page -->
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-row>
        <v-col class="mt-5" align="center">
          <v-avatar size="100">
            <img src="../avatars/myAvatar_600.png" />
          </v-avatar>
          <p class="white--text subtitle-1 mt-1">Pasha</p>
        </v-col>
        <v-col align="center">
              <app-project-popup-vue :btnclass="'success'" :text="'Add new Project'"></app-project-popup-vue>
        </v-col>
      </v-row>
      <v-list class="primary">
        <v-list-item-group v-model="item">
          <v-list-item v-for="(link, i) in links" :key="i" :to="link.route">
            <v-list-item-icon>
              <v-icon v-text="link.icon" class="white--text"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import ProjectPopupVue from './ProjectPopup.vue';
export default {
  data() {
    return {
      item: 1,
      drawer: false,
      links: [
        {
          icon: "dashboard",
          text: "Dashboard",
          route: "/"
        },
        {
          icon: "folder",
          text: "My Projects",
          route: "/projects"
        },
        {
          icon: "person",
          text: "Team",
          route: "/team"
        }
      ]
    };
  },
  methods: {
    redirect(path) {
      this.$router.push(path);
    }
  },
  components:{
      appProjectPopupVue: ProjectPopupVue
  }
};
</script>