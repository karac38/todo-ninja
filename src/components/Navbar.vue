<template>
  <nav>
    <v-toolbar flat dense>
        <v-toolbar-title  class="grey--text text-uppercase">
            <span class="font-weight-light">Todo</span>
            <span >Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items right>
            <v-btn text small color="primary">
                Log out
                <v-icon>
                    mdi-exit-to-app
                </v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>
<script>
export default {};
</script>