<template>
<div>
  <v-tabs
    v-model="active"
    centered
    grow
    @input="updateSelectedCategory"
  >
    <v-tab
      v-for="(category, i) in categories"
      :key="i"
    >
      {{ category }}
    </v-tab>
  </v-tabs>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class Categories extends Vue {
  active: number = 0;
  categories: string[] = ['All', 'XBOX ONE', 'PS4', 'WII U', 'PC', 'SWITCH']; // TODO add my games to logged in user

  @Action('callUpdateSelectedCategory') callUpdateSelectedCategory: any;

  updateSelectedCategory() {
    this.callUpdateSelectedCategory(this.categories[this.active]);
  }
}
</script>

<style scoped lang="scss">
</style>