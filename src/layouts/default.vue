<template>
  <v-app id="inspire">
    <v-app-bar class="px-3" density="compact" flat>
      <v-toolbar-title>FMDS - AULA 09</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" v-show="!userStore.isLoggedIn">Autenticar</v-btn>
      <v-btn to="/dashboard" v-show="userStore.isLoggedIn">Dashboard</v-btn>
      <v-btn to="/register" v-show="!userStore.isLoggedIn">Cadastre-se</v-btn>
    </v-app-bar>

    <v-main class="bg-grey-darken-3">
      <v-container>
        <v-row>
          <v-col cols="6" class="mx-auto">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
</script>
