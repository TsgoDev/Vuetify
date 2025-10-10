<template>
  <v-main>
    <v-container>
      <h1 class="mb-6">Cadastrado de Usuários</h1>
      <Table />
    </v-container>
  </v-main>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  components: {
    Table,
  },
};
</script>
