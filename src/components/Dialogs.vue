<template>
  <LoginForm />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginForm from './dialogs/LoginForm.vue';

@Component({
  components: {
    LoginForm
  }
})
export default class Dialogs extends Vue {

}
</script>

<style scoped lang="scss">
</style>