<template>
  <v-row
    no-gutters
    class="w-full h-screen bg-[#383838] flex justify-center items-center"
    align="center"
    justify="center"
  >
    <v-col cols="auto">
      <v-card
        min-width="290"
        color="#424242"
      >
        <Snackbar
          v-model="snackbar"
          :text="message"
        />

        <v-card-title class="text-white">
          <h2>Create an account</h2>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="isValid"
            lazy-validation
            @submit.prevent="submit"
          >
            <v-text-field
              class="text-white"
              v-model="user.name"
              :counter="16"
              :rules="nameRules"
              label="Name"
              required
            />
            <v-text-field
              type="password"
              v-model="user.password"
              :counter="16"
              :rules="passwordRules"
              label="Password"
              required
            />
            <v-btn
              :disabled="!isValid"
              class="mt-3 btn"
              type="submit"
            >
              Create
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import Snackbar from "@/components/Snackbar";
import messageDict from "@/lib/messageDict";

export default {
  name: "Create",
  layout: "create",
  components: {
    Snackbar,
  },
  data: () => ({
    isValid: true,
    user: {
      name: "",
      password: "",
      typingStatus: false,
    },
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 16) || "Name must be less than 16 characters",
    ],
    passwordRules :[
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password with 8 characters"

    ],
    snackbar: false,
  }),
  computed: {
    message() {
      const { message } = this.$route.query;
      return messageDict[message] || "";
    },
  },
  mounted() {
    this.snackbar = !!this.message;
  },

  methods: {
    ...mapActions(["createUser"]),
    submit() {
      if (this.$refs.form.validate()) {
        this.createUser(this.user);
        this.$router.push("/");
      }
    },
  },

  head: {
    title: "Create an account",
  },
};
</script>
