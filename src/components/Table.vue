<template>
  <v-card flat class="border mb-4">
    <div class="d-flex justify-space-between">
      <v-card-title>Usuários cadastrados</v-card-title>

      <v-card-title>
          <v-btn @click="isDialogOpen = true" variant="tonal" size="small">Adicionar usuário
          </v-btn>

        <v-dialog v-model="isDialogOpen" width="800px">
            <v-card>
               <v-card-text>
                Modal teste
               </v-card-text>
            </v-card>
        </v-dialog>

        <!-- <v-dialog width="800px">
            <template #activator="{ props }">
                <v-btn v-bind:="props" variant="tonal" size="small">Adicionar usuário</v-btn>
            </template>
            
            <v-card>
               <v-card-text>
                Modal teste
               </v-card-text>
            </v-card>

        </v-dialog> -->
      </v-card-title>
    </div>

    <v-table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Cargo</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tiago Soares</td>
          <td>tiago.soares@norven.com.br</td>
          <td>Desenvolverdor Software</td>
          <td>
            <v-btn variant="tonal" color="primary">Editar</v-btn>
          </td>
        </tr>
        <tr>
          <td>Daniel Soares</td>
          <td>daniel.soares@transzilli.com.br</td>
          <td>Motorista</td>
          <td>
            <v-btn variant="tonal" color="primary">Editar</v-btn>
          </td>
        </tr>
        <tr>
          <td>Andre Soares</td>
          <td>andre.soares@plcgoias.com.br</td>
          <td>Primero Soldado</td>
          <td>
            <v-btn variant="tonal" color="primary">Editar</v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
import { ref } from "vue";

export default {
  nome: "Table",
};

const isDialogOpen = ref(false)

</script>
