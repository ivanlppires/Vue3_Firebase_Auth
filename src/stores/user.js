import { defineStore } from "pinia";
import { getApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import router from "@/router";
const auth = getAuth(getApp());
export const useUserStore = defineStore("user", {
  state: () => ({
    email: null,
    accessToken: null,
    displayName: null,
    photoURL: null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.accessToken,
    getProfile: (state) => {
      return {
        email: state.email,
        displayName: state.displayName,
        photoURL: state.photoURL,
      };
    }
  },
  actions: {
    async register(user) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        this.email = userCredential.user.email;
        this.accessToken = userCredential.user.accessToken;
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    async auth (user) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        this.email = userCredential.user.email;
        this.accessToken = userCredential.user.accessToken;
        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    async authWithGoogle(){
      try {
        const provider = new GoogleAuthProvider();
        const userCredential = await signInWithPopup(auth, provider);
        this.email = userCredential.user.email;
        this.accessToken = userCredential.user.accessToken;
        this.displayName = userCredential.user.displayName;
        this.photoURL = userCredential.user.photoURL;

        console.log(userCredential.user)

        router.push("/dashboard");
      } catch (error) {
        console.log(error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.email = null;
        this.accessToken = null;
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  },
});
