<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text mt-4">Dashboard</h1>
    <v-container class="my-5">
      <v-row>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" small class="grey--text" tile depressed @click="sortBy('title')">
                <v-icon left small>mdi-folder</v-icon>Order by project title
              </v-btn>
            </template>
            <span>Sort projects by project name</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn v-on="on" small class="grey--text" tile depressed @click="sortBy('person')">
                <v-icon left small>person</v-icon>Order by person
              </v-btn>
            </template>
            <span>Sort projects by person's name</span>
          </v-tooltip>
        </v-col>
      </v-row>
      <app-project-table-row-view-vue v-for="p in projects" :key="p.id" :project="p"></app-project-table-row-view-vue>
    </v-container>
  </div>
</template>
<script>
import ProjectTableRowViewVue from '../components/ProjectTableRowView.vue';
export default {
  props:["projects"],
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) =>
        a[prop].toUpperCase() < b[prop].toUpperCase() ? -1 : 1
      );
    }
  },
  components: {
    appProjectTableRowViewVue: ProjectTableRowViewVue
  }
};
</script>