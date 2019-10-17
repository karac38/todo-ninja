<template>
  <div class="home">
    <h1>Homepage</h1>
    <p
      class="indigo white--text text-capitalize text-center"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati! Autem asperiores eum adipisci, recusandae eius dolor expedita aut, cupiditate placeat, rerum distinctio molestiae sunt earum fuga perferendis perspiciatis! Ab.</p>
    <v-btn class="blue white--text">Click me</v-btn>
    <v-btn depressed dark color="green">Click me</v-btn>
    <v-btn text color="green">Click me</v-btn>
    <v-btn dark color="green">
      <v-icon left>mdi-email</v-icon>
      <span>Email</span>
    </v-btn>
    <v-btn dark color="green" fab small>
      <v-icon dark>mdi-fingerprint</v-icon>
    </v-btn>
    <v-btn block color="primary" dark>Block Button</v-btn>
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      Upload
      <v-icon right dark>mdi-cloud-upload</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loader: null,
      loading3: false
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    }
  }
};
</script>