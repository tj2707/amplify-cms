<template>
  <v-app>
    <v-app-bar app color="primary" dark>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
}
</script>
