import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Views extends VuexModule {
  isLoginActive: boolean = false;

  @Action({ commit: 'updateIsLoginActive' })
  callUpdateIsLoginActive(isActive: boolean): any {
    return isActive;
  }

  @Mutation
  updateIsLoginActive(isActive: boolean) {
    this.isLoginActive = isActive;
  }

  get getIsLoginActive(): boolean {
    return this.isLoginActive;
  }
}
