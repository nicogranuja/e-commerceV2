<template>
<v-app dark>
  <Navbar />
  <Categories />
  <Genres />
  <v-content>
    <Dialogs />
    <v-container fluid>
      <Games />
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import Dialogs from './components/Dialogs.vue';
import Categories from './components/Categories.vue';
import Genres from './components/Genres.vue';
import Games from './components/Games.vue';

@Component({
  components: {
    Navbar,
    Dialogs,
    Categories,
    Genres,
    Games
  }
})
export default class App extends Vue {}
</script>
