<template>
  <div>
    <v-card flat tile>
      <v-row no-gutters :class="`pa-4 project ${project.status}-border`">
        <v-col cols="12" md="4">
          <div class="caption grey--text">Project title</div>
          <div>{{project.title}}</div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="caption grey--text">Person</div>
          <div>{{project.person}}</div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="caption grey--text">Due by</div>
          <div>{{project.dateBy}}</div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="caption grey--text">Status</div>
          <v-select
            :items="items"
            class="my-2 white--text"
            label="Status"
            chips
            solo
            v-model="selected"
            @change="change"
          >
            <template #selection="data">
              <v-chip :key="project.id" class="white--text" :class="selected">{{selected}}</v-chip>
            </template>
          </v-select>
        </v-col>
        <v-col cols="12" md="2">
          <div class="text-right">
            <app-project-popup :text="'Edit'" :project="project" :btnclass="'primary'" flat></app-project-popup>
          </div>
        </v-col>
      </v-row>
    </v-card>
    <v-divider></v-divider>
  </div>
</template>
<script>
import ProjectPopupVue from "./ProjectPopup.vue";
import db from "../fb";
import { EventBus } from "../eventBus";

export default {
  props: ["project"],
  data() {
    return {
      items: ["ongoing", "complete", "overdue"],
      selected: this.project.status
    };
  },
  methods: {
    change() {
      let updateProject = this.project;
      updateProject.status = this.selected;
      db.collection("projects")
        .doc(this.project.id)
        .update(updateProject)
        .then(() => {
          EventBus.$emit("new-project", "Project has been updated!");
        });
    }
  },
  components: {
    appProjectPopup: ProjectPopupVue
  }
};
</script>
<style scoped>
.project.complete-border {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing-border {
  border-left: 4px solid orange;
}
.project.overdue-border {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #3cd1c2;
}
.v-chip.ongoing {
  background: orange;
}
.v-chip.overdue {
  background: tomato;
}
</style>