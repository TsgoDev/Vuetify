<template>
  <v-main>
    <v-container>
      <h1 class="mb-6">Cadastrado de Usuários</h1>

      <v-card flat class="border mb-4">
        <div class="d-flex justify-space-between align-center pa-4">
          <v-card-title class="pa-0">
            <v-btn @click="isDialogOpenAdd = true" variant="tonal" size="small">
              Adicionar usuário
            </v-btn>
          </v-card-title>

          <v-text-field
            v-model="searchQuery"
            placeholder="Pesquisar..."
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="compact"
            hide-details
            style="max-width: 300px"
          />
        </div>

        <!-- Tabela -->
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
            <tr v-for="item in filteredItems" :key="item.id">
              <td>{{ item.nome }}</td>
              <td>{{ item.email }}</td>
              <td>
                <v-chip color="text" variant="outlined" size="small">
                  {{ item.cargo }}
                </v-chip>
              </td>
              <td>
                <v-btn
                  @click="openEditDialog(item)"
                  variant="tonal"
                  color="primary"
                >
                  Editar
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>

      <!-- Componentes de Dialog -->
      <AddDialog
        v-model="isDialogOpenAdd"
        @save="handleAddUser"
      />

      <EditDialog
        v-model="isDialogOpenEdit"
        :user="selectedUser"
        @save="handleEditUser"
      />
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, computed } from "vue";
import AddDialog from "@/components/AddDialog.vue";
import EditDialog from "@/components/EditDialog.vue";

const isDialogOpenAdd = ref(false);
const isDialogOpenEdit = ref(false);
const searchQuery = ref("");
const selectedUser = ref(null);

const items = ref([
  {
    id: 1,
    nome: "Tiago Soares",
    email: "tiago.soares@norven.com.br",
    cargo: "Desenvolvedor Software",
  },
  {
    id: 2,
    nome: "Daniel Soares",
    email: "daniel.soares@transzilli.com.br",
    cargo: "Motorista",
  },
  {
    id: 3,
    nome: "Andre Soares",
    email: "andre.soares@plcgoias.com.br",
    cargo: "Primeiro Soldado",
  },
]);

const filteredItems = computed(() => {
  if (!searchQuery.value) {
    return items.value;
  }

  const query = searchQuery.value.toLowerCase();

  return items.value.filter(
    (item) =>
      item.nome.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.cargo.toLowerCase().includes(query)
  );
});

const openEditDialog = (user) => {
  selectedUser.value = { ...user };
  isDialogOpenEdit.value = true;
};

const handleAddUser = (userData) => {
  const newId = items.value.length > 0
    ? Math.max(...items.value.map((item) => item.id)) + 1
    : 1;

  items.value.push({
    id: newId,
    ...userData,
  });
};

const handleEditUser = (userData) => {
  const index = items.value.findIndex((item) => item.id === userData.id);
  if (index !== -1) {
    items.value[index] = { ...userData };
  }
};
</script>
