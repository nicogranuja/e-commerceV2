<template>
  <v-layout row justify-center>
    <v-dialog :value="isFAQFormActive" persistent max-width="500px">
      FAQ
      <v-btn @click="closeFAQForm">Close</v-btn>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class FAQForm extends Vue {
  @Action('callUpdateIsFAQFormActive') callUpdateIsFAQFormActive: any;
  @Getter('getIsFAQFormActive') isFAQFormActive!: boolean;

  closeFAQForm() {
    this.callUpdateIsFAQFormActive(false);
  }
}
</script>

<style scoped lang="scss">
</style>