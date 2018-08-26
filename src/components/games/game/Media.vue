<template>
<v-card-media
  :src="url"
  height="345px"
></v-card-media>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Media extends Vue {
  @Prop(String) url!: string;
}
</script>

<style scoped lang="scss">
</style>