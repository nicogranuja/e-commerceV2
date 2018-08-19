<template>
  <v-app>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {}
</script>
