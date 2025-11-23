<template>
  <v-dialog :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" width="800px">
    <v-card>
      <v-card-title>Editar usuário</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.nome"
              label="Nome"
              type="text"
              variant="outlined"
              required
            />
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              v-model="formData.email"
              label="Email"
              type="email"
              :rules="emailRules"
              required
              variant="outlined"
            />
          </v-col>
        </v-row>

        <v-select
          v-model="formData.cargo"
          label="Cargo"
          variant="outlined"
          :items="cargos"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="handleCancel">Cancelar</v-btn>
        <v-btn variant="tonal" color="success" @click="handleSave">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  user: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue", "save"]);

const formData = ref({
  id: null,
  nome: "",
  email: "",
  cargo: "",
});

const cargos = ["Programador", "Advogado", "Policial", "Gerente"];

const emailRules = [
  (value) => {
    if (value) {
      return true;
    }
    return "E-mail é obrigatório.";
  },
  (value) => {
    if (value && value.includes("@")) {
      return true;
    } else if (value) {
      return "E-mail inválido!!";
    }
    return true;
  },
];

const loadUserData = () => {
  if (props.user) {
    formData.value = {
      id: props.user.id || null,
      nome: props.user.nome || "",
      email: props.user.email || "",
      cargo: props.user.cargo || "",
    };
  }
};

const handleCancel = () => {
  emit("update:modelValue", false);
};

const handleSave = () => {
  if (!formData.value.nome || !formData.value.email || !formData.value.cargo) {
    return;
  }

  emit("save", { ...formData.value });
  emit("update:modelValue", false);
};

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    loadUserData();
  }
});

watch(() => props.user, () => {
  if (props.modelValue) {
    loadUserData();
  }
}, { deep: true });
</script>
