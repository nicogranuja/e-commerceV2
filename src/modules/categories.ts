import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

@Module
export default class Categories extends VuexModule {
  category: string = 'all';

  @Action({ commit: 'updateSelectedCategory' })
  callUpdateSelectedCategory(category: string): any {
    return category;
  }

  @Mutation
  updateSelectedCategory(category: string) {
    this.category = category;
  }

  get selectedCategory(): string {
    return this.category;
  }
}
