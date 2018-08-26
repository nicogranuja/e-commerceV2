import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class Views extends VuexModule {
  isLoginFormActive: boolean = false;
  isRegisterFormActive: boolean = false;

  // Login
  @Action({ commit: 'updateIsLoginFormActive' })
  callUpdateIsLoginFormActive(isActive: boolean): any {
    return isActive;
  }

  @Mutation
  updateIsLoginFormActive(isActive: boolean) {
    this.isLoginFormActive = isActive;
  }

  get getIsLoginFormActive(): boolean {
    return this.isLoginFormActive;
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
