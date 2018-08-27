<template>
<div class="price"> 
  <v-icon class="money-sign">attach_money</v-icon>
  <span> {{ dollarPriceValue }}</span>
  <span class="cents"> {{ centsPriceValue }}</span>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Price extends Vue {
  @Prop(Number) price!: number;

  get dollarPriceValue(): number {
    return Math.floor(this.price);
  }

  get centsPriceValue(): string {
    const price = this.price.toString();
    return price.toString().slice(3, price.length);
  }
}
</script>

<style scoped lang="scss">
.price {
  color: #ee44aa;
  font-size: 22px;
  .money-sign {
    position: relative;
    left: 3%;
    transform: rotate(20deg);
  }
  .cents {
    position: absolute;
    bottom: 12;
    font-size: 14px;
  }
}
</style>