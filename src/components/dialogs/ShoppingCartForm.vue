<template>
  <v-layout row justify-center>
    <v-dialog :value="isShoppingFormActive" persistent max-width="500px">
      Shopping Cart
      <v-btn @click="closeShoppingCartForm">Close</v-btn>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class ShoppingCartForm extends Vue {
  @Action('callUpdateIsShoppingCartFormActive')
  callUpdateIsShoppingCartFormActive: any;
  @Getter('getIsShoppingCartFormActive') isShoppingFormActive!: boolean;

  closeShoppingCartForm() {
    this.callUpdateIsShoppingCartFormActive(false);
  }
}
</script>

<style scoped lang="scss">
</style>