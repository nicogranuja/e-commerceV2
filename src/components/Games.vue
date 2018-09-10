<template>
<v-container grid-list-lg text-xs-center fluid>
  <v-layout row wrap justify-center>
    <v-flex v-for="(game, i) in computedGames" 
      :key="i" 
      sm2
    >
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
  @Getter('selectedCategory') category!: string;
  @Getter('selectedGenre') genre!: string;

  get computedGames(): Game[] {
    let games: Game[] = [];
    const showAllCategories: boolean = (this.category.toLowerCase() === 'all');
    const showAllGenres: boolean = (this.genre.toLowerCase() === 'all genres');
    const showAll: boolean = (showAllCategories && showAllGenres);

    if (showAll) {
      return this.games;
    }

    this.games.forEach((game) => {
      if (game.console.toLowerCase() === this.category.toLowerCase()) {
        games.push(game);
      }
    });

    if (showAllGenres) {
      return games;
    } else if (showAllCategories) {
      games = this.games;
    }

    const gamesWithGenre: Game[] = [];

    games.forEach((game) => {
      if (game.genre.toLowerCase() === this.genre.toLowerCase()) {
        gamesWithGenre.push(game);
      }
    });

    return gamesWithGenre;
  }
}
</script>

<style scoped lang="scss">
</style>