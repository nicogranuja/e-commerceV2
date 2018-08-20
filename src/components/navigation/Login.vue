<template>
  <v-btn medium color="accent">
    Login
    <v-icon right>account_box</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  private dialog: boolean = false;
}
</script>

<style scoped lang="scss">
</style>