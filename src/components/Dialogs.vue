<template>
<div>
  <LoginForm />
  <RegisterForm />
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginForm from './dialogs/LoginForm.vue';
import RegisterForm from './dialogs/RegisterForm.vue';

@Component({
  components: {
    LoginForm,
    RegisterForm
  }
})
export default class Dialogs extends Vue {}
</script>

<style scoped lang="scss">
</style>