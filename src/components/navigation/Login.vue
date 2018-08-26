<template>
<v-btn small color="accent" @click="openLoginForm">
  Login
  <v-icon right>account_box</v-icon>
</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Login extends Vue {
  @Action('callUpdateIsLoginActive') callUpdateIsLoginActive: any;

  openLoginForm() {
    this.callUpdateIsLoginActive(true);
  }
}
</script>

<style scoped lang="scss">
</style>