<template>
  <v-card>
    <v-card-title>
      <span class="headline">{{text}}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-form v-model="valid" lazy-validation ref="form">
          <v-text-field
            prepend-icon="folder"
            label="Title*"
            v-model="title"
            required
            :rules="titleRule"
          ></v-text-field>
          <v-textarea
            prepend-icon="edit"
            row-height="5"
            hint="Enter project information"
            persistent-hint
            auto-grow
            label="Details*"
            :rules="contentRule"
            v-model="content"
          ></v-textarea>
          <v-menu min-width="0" :close-on-content-click="false" v-model="menu1">
            <template #activator="{on}">
              <v-text-field
                :value="computedDateFormattedMomentjs"
                clearable
                label="Due Date*"
                readonly
                v-on="on"
                :rules="dateRule"
                prepend-icon="date_range"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
          </v-menu>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
        </v-form>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-btn tile color="red lighten-1 white--text ml-4" @click="closeDialog">Close</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        tile
        color="success lighten-1 white--text mr-4"
        @click="validate"
        :disabled="!valid"
        :loading="loading"
      >{{btnAddText}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import * as moment from "moment";
import { EventBus } from "../eventBus";
import db from "../fb";

export default {
  props: ["project", "text"],
  data() {
    return {
      id: "",
      title: "",
      content: "",
      menu1: false,
      date: "",
      checkbox: false,
      loading: false,
      btnAddText: "Add Project",
      titleRule: [
        v => !!v || "Title is required",
        v => (v && v.length > 5) || "Title must be more than 5 characters"
      ],
      contentRule: [
        v => !!v || "Title is required",
        v => (v && v.length > 10) || "Title must be more than 10 characters"
      ],
      dateRule: [v => !!v || "Date is required"],
      valid: true
    };
  },
  created() {
    if (this.project != null) {
      this.id = this.project.id;
      this.btnAddText = "Edit Project";
      this.title = this.project.title;
      this.content = this.project.content;
      let formattedDate = new Date(moment(
          this.project.dateBy,
          "Do MMM YYYY"
        ).format("YYYY-MM-DD")).toISOString().substr(0, 10);
      this.date = formattedDate;
    }
  },
  computed: {
    computedDateFormattedMomentjs() {
      return this.date ? moment(this.date).format("Do MMM YYYY") : "";
    },
    isNewProject() {
      return this.project == null || this.project == "undefined";
    }
  },
  methods: {
    closeDialog() {
      console.log("closing dialog called");
      EventBus.$emit("close-dialog");
    },
    validate() {
      if (this.$refs.form.validate()) {
        let newProject = {};
        if (this.isNewProject) {
          newProject = {
            title: this.title,
            dateBy: this.computedDateFormattedMomentjs,
            person: "Pasha",
            status: "ongoing",
            content: this.content
          };
          db.collection("projects")
            .add(newProject)
            .then(() => {
              EventBus.$emit("new-project", "A new project has been added!");
            });
        } else {
          newProject = this.project;
          newProject.title = this.title;
          newProject.dateBy = this.computedDateFormattedMomentjs;
          newProject.content = this.content;
          db.collection("projects")
            .doc(this.project.id)
            .update(newProject)
            .then(() => {
              EventBus.$emit("new-project", "Project has been updated!");
            });
        }
        this.closeDialog();
      }
    }
  }
};
</script>