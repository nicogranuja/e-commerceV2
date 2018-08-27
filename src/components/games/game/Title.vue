<template>
<div class="title">
  {{ title }}
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Title extends Vue {
  @Prop(String) title!: string;
}
</script>

<style scoped lang="scss">
.title {
  font-size: 14px;
  margin: 10px 0 20px 0;
}
</style>