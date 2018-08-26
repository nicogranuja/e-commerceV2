<template>
    <v-toolbar>
      <v-toolbar-title>Swagoo V2</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down toolbar">
        <Login />
        <Register />
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
      </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './navigation/Login.vue';
import Register from './navigation/Register.vue';

@Component({
  components: {
    Login,
    Register
  }
})
export default class Navbar extends Vue {}
</script>

<style lang="scss" scoped>
.toolbar {
  height: 80%;
  * {
    margin: 5px 5px 0 5px;
  }
}
</style>

