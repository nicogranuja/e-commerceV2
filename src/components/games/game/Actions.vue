<template>
<div class="card-actions">
  <v-btn 
    color="accent" 
    class="btn"
    @click="showGameInfo"
  >
    More
    <v-icon right>info</v-icon>
  </v-btn>
  <v-btn color="accent">
    Cart
    <v-icon right>add_shopping_cart</v-icon>
  </v-btn>

  <MoreInfo 
    :game="game" 
    :showInfo="showInfo"
    @hideGameInfo="hideGameInfo"
  />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MoreInfo from './actionDialogs/MoreInfo.vue';

@Component({
  components: {
    MoreInfo
  }
})
export default class Actions extends Vue {
  @Prop() game!: Game;
  @Prop(Number) index!: number;

  showInfo: boolean = false;

  showGameInfo() {
    this.showInfo = true;
  }

  hideGameInfo() {
    this.showInfo = false;
  }
}
</script>

<style scoped lang="scss">
.card-actions {
  position: absolute;
  top: 90%;
  left: 3.7%;
}
</style>