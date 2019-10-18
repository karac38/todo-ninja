<template>
  <nav>
    <v-toolbar flat dense>
      <v-toolbar-title class="grey--text text-uppercase">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items right>
        <v-btn text small color="primary">
          Log out
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary class="primary">
      <v-list class="primary">
        <v-list-item-group v-model="item">
          <v-list-item v-for="(link, i) in links" 
            :key="i" 
            :to="link.route">
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
  }
};
</script>