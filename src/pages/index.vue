<template>
  <v-main>
    <v-container>
      <h1 class="mb-6">Dashboard</h1>
      <Table/>
      <v-row>
        <!---CARD 1-->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card flat class="border">
            <v-img class="align-end text-white"
              src="https://images.pexels.com/photos/3700900/pexels-photo-3700900.jpeg">
              <v-card-title>Top 10 Praias da Bahia</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

            <v-card-text>
              <div>Rio vermelho</div>
              <div>Lorem, ipsum dolor sit</div>
            </v-card-text>

            <v-card-actions>
             <v-btn variant="outlined" color="secondary">Ver mais</v-btn>
             <v-btn prepend-icon="mdi-cart" variant="tonal" color="warning">Comprar</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

        <!---CARD 2-->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card flat class="border">
            <v-img class="align-end text-white"
              src="https://images.pexels.com/photos/3700900/pexels-photo-3700900.jpeg">
              <v-card-title>Top 10 Praias da Bahia</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

            <v-card-text>
              <div>Rio vermelho</div>
              <div>Lorem, ipsum dolor sit</div>
            </v-card-text>

            <v-card-actions>
            <v-btn variant="outlined" color="secondary">Ver mais</v-btn>
            <v-btn prepend-icon="mdi-cart" variant="tonal" color="warning">Comprar</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

        <!---CARD 3-->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card flat class="border">
            <v-img class="align-end text-white"
              src="https://images.pexels.com/photos/3700900/pexels-photo-3700900.jpeg">
              <v-card-title>Top 10 Praias da Bahia</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

            <v-card-text>
              <div>Rio vermelho</div>
              <div>Lorem, ipsum dolor sit</div>
            </v-card-text>

            <v-card-actions>
             <v-btn variant="outlined" color="secondary">Ver mais</v-btn>
             <v-btn prepend-icon="mdi-cart" variant="tonal" color="warning">Comprar</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

        <!---CARD 4-->
        <v-col cols="12" sm="6" md="4" lg="3">
          <v-card flat class="border">
            <v-img class="align-end text-white"
              src="https://images.pexels.com/photos/3700900/pexels-photo-3700900.jpeg">
              <v-card-title>Top 10 Praias da Bahia</v-card-title>
            </v-img>
            <v-card-subtitle class="pt-3">Salvador</v-card-subtitle>

            <v-card-text>
              <div>Rio vermelho</div>
              <div>Lorem, ipsum dolor sit</div>
            </v-card-text>

            <v-card-actions>
             <v-btn variant="outlined" color="secondary">Ver mais</v-btn>
             <v-btn prepend-icon="mdi-cart" variant="tonal" color="warning">Comprar</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
  components: {
    Table,
  }
}
</script>

