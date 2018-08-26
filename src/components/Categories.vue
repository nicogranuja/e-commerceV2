<template>
<div>
  <v-tabs
    v-model="active"
    centered
    grow
  >
    <v-tab
      v-for="n in 3"
      :key="n"
    >
      Item {{ n }}
    </v-tab>
  </v-tabs>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Categories extends Vue {
  active: number = 0;
}
</script>

<style scoped lang="scss">
</style>