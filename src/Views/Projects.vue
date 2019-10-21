<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text mt-4">Projects</h1>
    <v-container class="my-5">
      <v-row>
        <v-col>
          <v-expansion-panels popout>
            <v-expansion-panel v-for="project in myProjects" :key="project.id">
              <v-expansion-panel-header v-ripple="{ 'class': 'primary--text' }">{{project.title}}</v-expansion-panel-header>
              <v-expansion-panel-content class="px-4 grey--text">
                  <div class="subtitle-2 font-weight-bold">{{project.dateBy}}</div>
                  <div>{{project.content}}</div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ["projects"],
  data(){
      return{
          myProjects : []
      }
  },
  created() {
    console.log("created Projects");
    this.myProjects = this.projects.filter(p => p.person === "Pasha");
  }
};
</script>