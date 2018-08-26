import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Views extends VuexModule {
  isLoginActive: boolean = false;
  isRegisterFormActive: boolean = false;

  // Login
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

  // Register
  @Action({ commit: 'updateIsRegisterFormActive' })
  callUpdateRegisterFormIsActive(isActive: boolean): any {
    return isActive;
  }

  @Mutation
  updateIsRegisterFormActive(isActive: boolean) {
    this.isRegisterFormActive = isActive;
  }

  get getIsRegisterFormActive(): boolean {
    return this.isRegisterFormActive;
  }
}
