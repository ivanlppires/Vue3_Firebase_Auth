<template>
    <!-- formulário de autenticação com usuário e senha usando vuetify -->
    <v-card class="text-center">
        <v-card-title>Autentique-se para acessar o DashBoard</v-card-title>
        <v-card-text>
            <v-text-field v-model="user.email" label="Email" />
            <v-text-field type="password" v-model="user.password" label="Senha" />
        </v-card-text>
        <v-card-action>
            <v-btn @click="login">Autenticar</v-btn>
        </v-card-action>
    </v-card>
</template>
<script setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/user';
const user = ref({
    email: '',
    password: ''
});
const userStore = useUserStore();
const login = () => {
    userStore.auth(user.value);
}
</script>