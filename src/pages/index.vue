<template>
  <v-main>
    <v-container
      class="d-flex align-center justify-center"
      style="min-height: 80vh"
    >
      <v-row class="align-center">
        <!-- Logo Vuetify -->
        <v-col cols="12" md="6" class="text-center">
          <v-avatar size="200" class="mb-4">
            <v-img
              src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo-atom.svg"
            ></v-img>
          </v-avatar>
        </v-col>

        <!-- Texto -->
        <v-col cols="12" md="6">
          <div class="pa-4">
            <h1 class="text-h3 font-weight-bold mb-4">
              Vue Component Framework
            </h1>
            <p class="text-h6 text-grey-darken-1 mb-6">
              Esse é mais um projeto desenvolvido para fins didáticos com
              intuito de praticar o desenvolvimento com Vue 3 utilizando Vuetify
            </p>

            <!-- Botões -->
            <div class="d-flex flex-wrap">
              <v-btn
                color="primary"
                size="large"
                prepend-icon="mdi-check"
                variant="elevated"
                class="mr-4 mb-2"
              >
                Get Started
              </v-btn>

              <v-btn
                color="primary"
                size="large"
                prepend-icon="mdi-chevron-down"
                variant="outlined"
                class="mr-4 mb-2"
              >
                Why Vuetify?
              </v-btn>

              <v-btn
                color="primary"
                size="large"
                prepend-icon="mdi-github"
                variant="outlined"
                class="mb-2"
              >
                GitHub
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
