<template>
<v-container grid-list-xl text-xs-center>
  <v-layout row wrap justify-center>
    <v-flex v-for="(game, i) in games" :key="i" sm2>
      <GameCard :game="game" :index="i" />
    </v-flex>
  </v-layout>
</v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';
import GameCard from './games/GameCard.vue';

@Component({
  components: {
    GameCard
  }
})
export default class Games extends Vue {
  @Getter('gamesList') games!: Game[];
}
</script>

<style scoped lang="scss">
</style>