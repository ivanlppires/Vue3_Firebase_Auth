<template>
    <v-card class="text-center">
        <v-card-title>
            Novo Usuário
        </v-card-title>
        <v-card-text>
            <v-text-field label="E-mail" v-model="user.email" />
            <v-text-field label="Senha" v-model="user.password" />
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn @click="add" color="primary">Cadastrar</v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import { ref } from 'vue'

const user = ref({
    email: null,
    password: null,
})

const userStore = useUserStore();
const add = () => {
    userStore.register(user.value)
    user.value = {
        email: null,
        password: null,
    }
}

</script>