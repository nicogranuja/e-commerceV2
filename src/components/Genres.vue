<template>
<div>
  <v-tabs
    v-model="active"
    centered
    grow
    color="accent"
    slider-color="primary"
    class="genres"
  >
    <v-tab
      v-for="n in 7"
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
export default class Genres extends Vue {
  active: number = 0;
}
</script>

<style scoped lang="scss">
.genres {
  margin-top: 3px;
}
</style>