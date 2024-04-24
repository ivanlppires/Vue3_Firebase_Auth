<template>
    <v-card>
        <v-card-actions class="pa-3">
            <v-spacer />
            <v-btn @click="login()">Autenticar com o Google</v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>

</template>
<script setup>
    import { useUserStore } from '@/stores/user';
    const userStore = useUserStore();
    const login = () => {
        userStore.authWithGoogle();
    }
</script>