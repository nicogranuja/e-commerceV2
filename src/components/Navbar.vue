<template>
    <v-toolbar>
      <v-toolbar-title>Swagoo V2</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <Login />
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
      </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './navigation/Login.vue';

@Component({
  components: {
    Login
  }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
</style>

