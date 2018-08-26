<template>
  <v-layout row justify-center>
    <v-dialog :value="isLoginFormActive" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeLoginForm">Close</v-btn>
          <v-btn color="accent" @click.native="handleLogin">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';

@Component
export default class LoginForm extends Vue {
  @Action('callUpdateIsLoginFormActive') callUpdateIsLoginFormActive: any;
  @Getter('getIsLoginFormActive') isLoginFormActive!: boolean;

  closeLoginForm() {
    this.callUpdateIsLoginFormActive(false);
  }

  handleLogin() {
    // Login logic
  }
}
</script>

<style scoped lang="scss">
</style>