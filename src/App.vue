<template>
  <v-app app>
    <app-nav-bar></app-nav-bar>
    <v-content dark class="grey lighten-4">
      <router-view :projects="projects" class="mx-8 mb-4"></router-view>
      <v-snackbar v-model="snackbar" :timeout="2000" :color="color" top>
        {{ snackBarText }}
        <v-btn color="white" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-content>
  </v-app>
</template>
<script>
import NavbarVue from "./components/Navbar.vue";
import { EventBus } from "./eventBus";
import db from "./fb";

export default {
  name: "App",
  components: {
    appNavBar: NavbarVue
  },
  data() {
    return {
      projects: [],
      snackbar: false,
      snackBarText: "",
      color: ""
    };
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();
      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        } else if (change.type === "removed") {
          var index = this.projects
            .map(x => {
              return x.Id;
            })
            .indexOf(change.doc.id);
            this.projects.splice(index, 1);
        }
      });
    });
  },
  mounted() {
    EventBus.$on("new-project", (text) => {
      this.snackbar = true;
      this.snackBarText = text;
      this.color = "success";
    });
  },
  beforeDestroy() {
    EventBus.$off("new-project");
  }
};
</script>
