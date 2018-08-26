<template>
<v-text-field
  label="Search"
  prepend-icon="search"
></v-text-field>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {}
</script>

<style scoped lang="scss">
</style>