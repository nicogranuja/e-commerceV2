import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

@Module
export default class Genres extends VuexModule {
  genre: string = 'all genres';

  @Action({ commit: 'updateSelectedGenre' })
  callUpdateSelectedGenre(genre: string): any {
    return genre;
  }

  @Mutation
  updateSelectedGenre(genre: string) {
    this.genre = genre;
  }

  get selectedGenre(): string {
    return this.genre;
  }
}
