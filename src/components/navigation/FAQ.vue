<template>
<v-btn small color="accent" @click="openFAQForm">
  FAQ
  <v-icon right>contact_support</v-icon>
</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Login extends Vue {
  @Action('callUpdateIsFAQFormActive') callUpdateIsFAQFormActive: any;

  openFAQForm() {
    this.callUpdateIsFAQFormActive(true);
  }
}
</script>

<style scoped lang="scss">
</style>