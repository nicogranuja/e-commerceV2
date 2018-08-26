import { Module, VuexModule } from 'vuex-module-decorators';

@Module
export default class Games extends VuexModule {
  games: Game[] = require('../data/gamesList.json');

  get gamesList(): Game[] {
    return this.games;
  }
}
