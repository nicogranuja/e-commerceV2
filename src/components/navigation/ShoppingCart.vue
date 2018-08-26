<template>
<v-btn small color="accent" @click="openShoppingCartForm">
  Cart
  <v-icon right>shopping_cart</v-icon>
</v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class ShoppingCart extends Vue {
  @Action('callUpdateIsShoppingCartFormActive')
  callUpdateIsShoppingCartFormActive: any;

  openShoppingCartForm() {
    this.callUpdateIsShoppingCartFormActive(true);
  }
}
</script>

<style scoped lang="scss">
</style>