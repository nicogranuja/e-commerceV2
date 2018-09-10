<template>
<div>
  <v-tabs
    v-model="active"
    centered
    grow
    color="accent"
    slider-color="primary"
    class="genres"
    @input="updateSelectedGenre"
  >
    <v-tab
      v-for="(genre, i) in genres"
      :key="i"
    >
      {{ genre }}
    </v-tab>
  </v-tabs>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class Genres extends Vue {
  active: number = 0;
  genres: string[] = ['ALL GENRES', 'RPG', 'SHOOTER', 'SPORTS', 'STRATEGY', 'ADVENTURE', 'RACING'];

  @Action('callUpdateSelectedGenre') callUpdateSelectedGenre: any;

  updateSelectedGenre() {
    this.callUpdateSelectedGenre(this.genres[this.active]);
  }
}
</script>

<style scoped lang="scss">
.genres {
  margin-top: 3px;
}
</style>