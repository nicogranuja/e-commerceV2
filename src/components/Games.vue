<template>
<v-container grid-list-xl text-xs-center>
  <v-layout row wrap justify-center>
    <v-flex v-for="i in 50" :key="i" xs3>
      <v-card dark color="primary">
        <v-card-text>4</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class Games extends Vue {
  @Getter('gamesList') games!: Game[];
}
</script>

<style scoped lang="scss">
</style>