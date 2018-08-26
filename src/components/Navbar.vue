<template>
<v-toolbar>
  <v-toolbar-title>Swagoo V2</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down toolbar">
    <SearchBar class="search-bar" />
    <ShoppingCart />
    <Login />
    <Register />
    <FAQ />
  </v-toolbar-items>
</v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Login from './navigation/Login.vue';
import Register from './navigation/Register.vue';
import ShoppingCart from './navigation/ShoppingCart.vue';
import FAQ from './navigation/FAQ.vue';
import SearchBar from './navigation/SearchBar.vue';

@Component({
  components: {
    Login,
    Register,
    ShoppingCart,
    FAQ,
    SearchBar
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
.search-bar {
  margin-right: 15px;
  margin-top: 12.5px;
}
</style>

