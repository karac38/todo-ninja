<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card outlined tile flat class="text-center">
      <v-responsive class="pt-4">
        <v-avatar size="100" class="grey lighten-2">
          <img :src="member.avatar">
        </v-avatar>
      </v-responsive>
      <v-card-text>
        <div class="subtitle-2">{{member.name}}</div>
        <div class="grey--text">{{member.role}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn text small color="grey">
          <v-icon small left>message</v-icon>
          <span>Message</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["member"]
};
</script>