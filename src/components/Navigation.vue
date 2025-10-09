<template>
  <!-- Sidebar -->
  <v-navigation-drawer v-model="isDraweOpen">
    <v-list>
      <v-list-subheader>Navigate</v-list-subheader>
      <v-list-item prepend-icon="mdi-home">Home</v-list-item>
      <v-list-item prepend-icon="mdi-account">Usuários</v-list-item>

      <v-list-group value="clientes">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-account-circle"
            title="Clientes"
          ></v-list-item>
        </template>
        <v-list-item prepend-icon="mdi-currency-usd">Vendas</v-list-item>
        <v-list-item prepend-icon="mdi-chart-line">Relatório</v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>

  <!-- Navbar -->
  <v-app-bar flat class="border-b">
    <v-app-bar-nav-icon
      @click="isDraweOpen = !isDraweOpen"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Meu app</v-app-bar-title>

    <template #append>
      <v-btn icon class="mr-2">
        <!-- Icon sino -->
        <v-badge color="primary" content="2">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>

      <!-- Avatar -->
      <v-menu>
        <template #activator="{ props }">
          <v-avatar v-bind:="props">
            <v-img
              src="https://i.pinimg.com/736x/c1/11/99/c111997e7e2a677897e3073e787efb3d.jpg"
            ></v-img>
          </v-avatar>
        </template>

        <v-card min-height="130px">
          <v-list :lines="false" density="compact" nav>
            <v-list-item prepend-icon="mdi-account-outline">
              <v-list-item-title>Meu Perfil</v-list-item-title>
            </v-list-item>
            <v-list-item prepend-icon="mdi-heart-outline">
              <v-list-item-title>Favoritos</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
const isDraweOpen = ref(false);
</script>
