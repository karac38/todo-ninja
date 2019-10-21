<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text mt-4">Team</h1>
    <v-container class="my-5">
      <v-row>
        <team-member v-for="(m,i) in team" :key="i" :member="m"></team-member>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TeamMemeberVue from "../components/TeamMemeber.vue";

export default {
  data() {
    return {
      team: [
        { name: "Pasha", role: "Web Developer", avatar:require('../avatars/myAvatar_600.png') },
        { name: "Ryu", role: "Gradphic Designer", avatar:require('../avatars/icons8-person-100.png') },
        { name: "Chun Li", role: "Web Developer", avatar: require('../avatars/icons8-user-48.png')},
        { name: "Gouken", role: "Social Media Maverick", avatar:require('../avatars/icons8-user-male-skin-type-5-48.png') },
        { name: "Toshi", role: "Sales Guru", avatar:require('../avatars/icons8-user-female-skin-type-5-48.png') }
      ]
    };
  },
  components: {
    teamMember: TeamMemeberVue
  }
};
</script>