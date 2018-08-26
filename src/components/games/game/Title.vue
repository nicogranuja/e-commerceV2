<template>
<v-card-title primary-title>
  <div>
    <h3 class="headline mb-0">{{ title }}</h3>
  </div>
</v-card-title>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop(String) title!: string;
}
</script>

<style scoped lang="scss">
</style>