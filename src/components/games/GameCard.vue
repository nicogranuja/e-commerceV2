<template>
<v-card class="game-card">
  <Media :url="game.url" />

  <Title :title="game.title" />

  <Price :price="game.price" />

  <Actions 
    :description="game.description" 
    :youtubeId="game.youtubeId"
    :index="index"
  />
</v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Media from './game/Media.vue';
import Title from './game/Title.vue';
import Actions from './game/Actions.vue';
import Price from './game/Price.vue';

@Component({
  components: {
    Media,
    Title,
    Actions,
    Price
  }
})
export default class GameCard extends Vue {
  @Prop() game!: Game;
  @Prop(Number) index!: number;
}
</script>

<style scoped lang="scss">
.game-card {
  height: 500px;
}
</style>