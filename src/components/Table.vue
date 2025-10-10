<template>
  <v-card flat class="border mb-4">
    <div class="d-flex justify-space-between">
      <v-card-title>
        <v-btn @click="isDialogOpenAdd = true" variant="tonal" size="small">
          Adicionar usuário
        </v-btn>

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
          <td>
            <v-chip color="text" variant="outlined" size="small"
              >Desenvolvedor Software</v-chip
            >
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
                  <v-btn variant="text" @click="isDialogOpenEdit = false"
                    >Cancelar</v-btn
                  >
                  <v-btn variant="tonal" color="success">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </td>
        </tr>
        <tr>
          <td>Daniel Soares</td>
          <td>daniel.soares@transzilli.com.br</td>
          <td>
            <v-chip color="success" variant="outlined" size="small"
              >Motorista</v-chip
            >
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
                  <v-btn variant="text" @click="isDialogOpenEdit = false"
                    >Cancelar</v-btn
                  >
                  <v-btn variant="tonal" color="success">Salvar</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </td>
        </tr>
        <tr>
          <td>Andre Soares</td>
          <td>andre.soares@plcgoias.com.br</td>
          <td>
            <v-chip color="primary" variant="outlined" size="small"
              >Primeiro Soldado</v-chip
            >
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
</template>

<script setup>
import { ref } from "vue";

const isDialogOpenAdd = ref(false);
const isDialogOpenEdit = ref(false);

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
