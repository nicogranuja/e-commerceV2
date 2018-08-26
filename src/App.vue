<template>
<v-app dark>
  <Navbar />
  <v-content>
    <Dialogs />
    <v-container fluid>
      <!-- Main display info -->
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Navbar from './components/Navbar.vue';
import Dialogs from './components/Dialogs.vue';

@Component({
  components: {
    Navbar,
    Dialogs
  }
})
export default class App extends Vue {}
</script>
