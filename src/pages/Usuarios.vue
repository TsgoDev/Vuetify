<template>
  <v-main>
    <v-container>
      <h1 class="mb-6">Cadastrado de Usuários</h1>

      <v-card flat class="border mb-4">
        <!-- ======================================== -->
        <!-- INÍCIO DO CAMPO DE PESQUISA NO TEMPLATE -->
        <!-- ======================================== -->
        <div class="d-flex justify-space-between align-center pa-4">
          <v-card-title class="pa-0">
            <v-btn @click="isDialogOpenAdd = true" variant="tonal" size="small">
              Adicionar usuário
            </v-btn>
          </v-card-title>

          <!-- CAMPO DE PESQUISA - Conectado com searchQuery via v-model -->
          <!-- Quando o usuário digita aqui, searchQuery.value muda automaticamente -->
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
        <!-- ======================================== -->
        <!-- FIM DO CAMPO DE PESQUISA NO TEMPLATE -->
        <!-- ======================================== -->

        <!-- Modal para Adicionar -->
        <v-dialog v-model="isDialogOpenAdd" width="800px">
          <v-card>
            <v-card-title>Adicionar usuário</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-text-field label="Nome" type="text" variant="outlined">
                  </v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    label="Email"
                    type="email"
                    v-bind:rules="emailRules"
                    required
                    variant="outlined"
                  >
                  </v-text-field>
                </v-col>
              </v-row>

              <v-select
                label="Cargo"
                variant="outlined"
                :items="['Programador', 'Advogado', 'Policial', 'Gerente']"
              >
              </v-select>
            </v-card-text>

            <v-card-actions>
              <v-btn variant="text" @click="isDialogOpenAdd = false"
                >Cancelar</v-btn
              >
              <v-btn variant="tonal" color="success">Salvar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

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
            <!-- ======================================== -->
            <!-- TABELA USANDO DADOS FILTRADOS -->
            <!-- ======================================== -->
            <!-- v-for="item in filteredItems" - Usa os dados filtrados pela pesquisa -->
            <!-- Se não há pesquisa, filteredItems = items (todos os dados) -->
            <!-- Se há pesquisa, filteredItems = apenas os dados que correspondem -->
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
                  @click="isDialogOpenEdit = true"
                  variant="tonal"
                  color="primary"
                >
                  Editar
                </v-btn>

                <v-dialog v-model="isDialogOpenEdit" width="800px">
                  <v-card>
                    <v-card-title>Editar usuário</v-card-title>
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Nome"
                            type="text"
                            variant="outlined"
                          >
                          </v-text-field>
                        </v-col>

                        <v-col>
                          <v-text-field
                            label="Email"
                            type="email"
                            v-bind:rules="emailRules"
                            required
                            variant="outlined"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>

                      <v-select
                        label="Cargo"
                        variant="outlined"
                        :items="[
                          'Programador',
                          'Advogado',
                          'Policial',
                          'Gerente',
                        ]"
                      >
                      </v-select>
                    </v-card-text>

                    <v-card-actions>
                      <v-btn variant="text" @click="isDialogOpenEdit = false"
                        >Cancelar</v-btn
                      >
                      <v-btn variant="tonal" color="success">Salvar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, computed } from "vue";

const isDialogOpenAdd = ref(false);
const isDialogOpenEdit = ref(false);

// ========================================
// INÍCIO DO CÓDIGO DE PESQUISA
// ========================================

// 1. VARIÁVEL REATIVA - Armazena o texto digitado no campo de pesquisa
// Esta variável é conectada com o v-model do campo de input (linha 15 do template)
const searchQuery = ref("");

// 2. DADOS DA TABELA - Array com os dados que serão exibidos na tabela
// Cada item tem: id, nome, email e cargo
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

// 3. PROPRIEDADE COMPUTADA - Filtra os dados baseado na pesquisa
// Esta função roda automaticamente sempre que searchQuery muda
const filteredItems = computed(() => {
  // Se não há texto de pesquisa, mostra todos os itens
  if (!searchQuery.value) {
    return items.value;
  }

  // Converte o texto de pesquisa para minúsculo para comparação
  const query = searchQuery.value.toLowerCase();

  // Filtra os itens que contêm o texto pesquisado em qualquer campo
  return items.value.filter(
    (item) =>
      item.nome.toLowerCase().includes(query) || // Pesquisa no nome
      item.email.toLowerCase().includes(query) || // Pesquisa no email
      item.cargo.toLowerCase().includes(query) // Pesquisa no cargo
  );
});

// ========================================
// FIM DO CÓDIGO DE PESQUISA
// ========================================

const emailRules = [
  (value) => {
    if (value) {
      return true;
    }
    return "E-mail é obrigatório.";
  },
  (value) => {
    if (value.includes("@")) {
      return true;
    } else {
      return "E-mail inválido!!";
    }
  },
];
</script>
