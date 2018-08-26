<template>
  <v-layout row justify-center>
    <v-dialog :value="isRegisterFormActive" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">User Registration</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Full Name*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Address*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Confirm Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Game Preferences*" type="text" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeRegisterForm">Close</v-btn>
          <v-btn color="accent" @click.native="handleRegistration">Submit</v-btn>
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
  @Action('callUpdateRegisterFormIsActive') callUpdateRegisterFormIsActive: any;
  @Getter('getIsRegisterFormActive') isRegisterFormActive!: boolean;

  closeRegisterForm() {
    this.callUpdateRegisterFormIsActive(false);
  }

  handleRegistration() {
    // Login logic
  }
}
</script>

<style scoped lang="scss">
</style>