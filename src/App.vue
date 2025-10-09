<template>
  <v-app>
    <!-- Sidebar -->
    <Navigation/>

    <!-- Main -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  components: {
    Navigation,
  }
}
</script>
