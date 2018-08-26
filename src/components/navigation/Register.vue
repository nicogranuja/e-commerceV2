<template>
<v-btn small color="accent" @click="openRegisterForm">
  Register
  <v-icon right>supervisor_account</v-icon>
</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Register extends Vue {
  @Action('callUpdateRegisterFormIsActive') callUpdateRegisterFormIsActive: any;

  openRegisterForm() {
    this.callUpdateRegisterFormIsActive(true);
  }
}
</script>

<style scoped lang="scss">
</style>