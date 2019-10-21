<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on }">
        <v-btn tile text :class="btnclass" dark v-on="on" @click="componentKey++">{{text}}</v-btn>
      </template>
      <app-project-modal :project="project" :key="componentKey" :text="text"></app-project-modal>
    </v-dialog>
  </v-row>
</template>
<script>
import ProjectModalVue from './ProjectModal.vue';
import { EventBus } from "../eventBus";

export default {
  props:["project", "text", "btnclass"],
  data() {
    return {
      dialog: false,
      componentKey: 0
    };
  },
  created(){
    EventBus.$on("close-dialog", ()=>{
      console.log("on close dialog");
      this.dialog = false;
    })
  },
   beforeDestroy() {
    EventBus.$off("close-dialog");
  },
  components:{
    appProjectModal: ProjectModalVue
  }
};
</script>