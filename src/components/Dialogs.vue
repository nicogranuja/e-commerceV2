<template>
<div>
  <LoginForm />
  <RegisterForm />
  <ShoppingCartForm />
  <FAQForm />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginForm from './dialogs/LoginForm.vue';
import RegisterForm from './dialogs/RegisterForm.vue';
import ShoppingCartForm from './dialogs/ShoppingCartForm.vue';
import FAQForm from './dialogs/FAQForm.vue';

@Component({
  components: {
    LoginForm,
    RegisterForm,
    ShoppingCartForm,
    FAQForm
  }
})
export default class Dialogs extends Vue {}
</script>

<style scoped lang="scss">
</style>