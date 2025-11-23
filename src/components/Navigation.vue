<template>
  <!-- App Bar -->
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>Vuetify</v-app-bar-title>

    <template #append>
      <!-- Icon notificação -->
      <v-btn icon class="mr-4">
        <v-badge color="primary" content="2">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>

      <!-- Avatar -->
      <v-menu>
        <template #activator="{ props }">
          <v-avatar v-bind:="props" class="mr-8">
            <v-img
              src="https://i.pinimg.com/736x/c1/11/99/c111997e7e2a677897e3073e787efb3d.jpg"
            ></v-img>
          </v-avatar>
        </template>

        <!-- Menu Perfil -->
        <v-card min-height="130px">
          <v-list :lines="false" density="comfortable" nav class="pa-2">
            <v-list-item
              prepend-icon="mdi-account-outline"
              class="mb-2 compact-item">
              <v-list-item-title>Meu Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item
              prepend-icon="mdi-heart-outline"
              class="mb-2 compact-item">
              <v-list-item-title>Favoritos</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>

  <!-- Navigation Drawer temporário -->
  <v-navigation-drawer v-model="drawer" temporary width="240">
    <v-list>
      <v-list-subheader>Menu</v-list-subheader>
      <v-list-item prepend-icon="mdi-home" to="/">Home</v-list-item>
      <v-list-item prepend-icon="mdi-account" to="/index">Usuários</v-list-item>
     </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(null);
</script>
