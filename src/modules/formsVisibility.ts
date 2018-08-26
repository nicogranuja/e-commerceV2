import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class formsVisibility extends VuexModule {
  isLoginFormActive: boolean = false;
  isRegisterFormActive: boolean = false;
  isShoppingCartFormActive: boolean = false;
  isFAQFormActive: boolean = false;

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
  callUpdateIsRegisterFormActive(isActive: boolean): any {
    return isActive;
  }

  @Mutation
  updateIsRegisterFormActive(isActive: boolean) {
    this.isRegisterFormActive = isActive;
  }

  get getIsRegisterFormActive(): boolean {
    return this.isRegisterFormActive;
  }

  // Shopping Cart
  @Action({ commit: 'updateIsShoppingCartFormActive' })
  callUpdateIsShoppingCartFormActive(isActive: boolean): any {
    return isActive;
  }

  @Mutation
  updateIsShoppingCartFormActive(isActive: boolean) {
    this.isShoppingCartFormActive = isActive;
  }

  get getIsShoppingCartFormActive(): boolean {
    return this.isShoppingCartFormActive;
  }

  // FAQ
  @Action({ commit: 'updateIsFAQFormActive' })
  callUpdateIsFAQFormActive(isActive: boolean): any {
    return isActive;
  }

  @Mutation
  updateIsFAQFormActive(isActive: boolean) {
    this.isFAQFormActive = isActive;
  }

  get getIsFAQFormActive(): boolean {
    return this.isFAQFormActive;
  }
}
