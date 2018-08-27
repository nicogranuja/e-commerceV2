<template>
<v-dialog :value="showInfo" persistent max-width="500px" class="info">
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{ game.title }}</h3>
      <div>{{ game.description }}</div>
    </v-card-title>

    <v-card-media height="400px">
      <!-- i frame -->
    </v-card-media>

    <v-btn @click="hideGameInfo">Close</v-btn>
  </v-card>
</v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class MoreInfo extends Vue {
  @Prop() game!: Game;
  @Prop(Boolean) showInfo!: boolean;

  hideGameInfo() {
    this.$emit('hideGameInfo');
  }
}
</script>

<style scoped lang="scss">
.info {
  background-color: #2d2d2d !important;
}
</style>