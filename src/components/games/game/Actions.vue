<template>
<div class="card-actions">
  <v-btn color="primary" class="btn">
    More
    <v-icon right>info</v-icon>
  </v-btn>
  <v-btn color="primary">
    Cart
    <v-icon right>add_shopping_cart</v-icon>
  </v-btn>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Actions extends Vue {
  @Prop(String) description!: string;
  @Prop(String) youtubeId!: string;
  @Prop(Number) index!: number;
}
</script>

<style scoped lang="scss">
.card-actions {
  position: absolute;
  top: 88%;
  left: 4%;
}
</style>