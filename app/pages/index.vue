<template>
  <v-row
    no-gutters
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

        <v-card-title>
          <h2>Login</h2>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="form"
            v-model="isValid"
            lazy-validation
            @submit.prevent="submit"
          >
            <v-text-field
              v-model="user.name"
              :counter="16"
              :rules="nameRules"
              class="text-white"
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
            <v-text-field
              v-model="user.room"
              :counter="16"
              :rules="roomRules"
              label="Enter the room"
              required
            />
            <v-btn
              :disabled="!isValid"
              color="primary"
              class="mt-3"
              type="submit"
            >
              Submit
            </v-btn>
            <v-btn
              color="primary"
              class="mt-3"
              type="create"
              @click="create"
            >
              Create an account
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
  name: "Home",
  layout: "login",
  components: {
    Snackbar,
  },
  data: () => ({
    isValid: true,
    user: {
      name: "",
      room: "",
      typingStatus: false,
    },
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 16) || "Name must be less than 16 characters",
    ],
    roomRules: [
      v => !!v || "Enter the room",
      v => (v && v.length <= 16) || "Room must be less than 16 characters",
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
        this.$router.push("/chat");
      }
    },
    create(){
        this.$router.push("/createAccount");
    },
  },

  head: {
    title: "Epsignal",
  },
};
</script>
