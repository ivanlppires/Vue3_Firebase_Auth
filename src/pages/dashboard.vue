<template>

    <v-card class="mx-auto" max-width="434" rounded="0">
        <v-img height="100%" src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg" cover>
            <v-avatar color="grey" rounded="0" size="150">
                <v-img :src="user.photoURL" cover></v-img>
            </v-avatar>
            <v-list-item class="text-white" :subtitle="user.email" :title="user.displayName"></v-list-item>
        </v-img>
    </v-card>

    <v-card>
        <v-card-title>
            DashBoard aqui
        </v-card-title>
        <v-card-text>
            Aqui vai o CRUD
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn @click="logout" color="error" append-icon="mdi mdi-logout">
                Sair
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script setup>
import { useUserStore } from '@/stores/user';
import router from '@/router';

const userStore = useUserStore();
const user = userStore.getProfile;
const logout = () => {
    userStore.logout();
    router.push('/');
}
</script>