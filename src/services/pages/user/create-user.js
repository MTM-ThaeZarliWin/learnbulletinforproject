export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      address: "",
      // validation rules for user email.
      emailRules: [
        (value) => !!value || "The email field is required.",
        (value) => /.+@.+\..+/.test(value) || "E-mail must be valid.",
      ],

      // validation rules for password.
      pwdRules: [
        (value) => !!value || "The password field is required.",
        (value) => value.length >= 8 || "Please Fill at least 8 characters",
      ],
    };
  },
  methods: {
    createUser() {
      this.$store.commit("setUserInfoData", {
        name: this.name,
        email: this.email,
        password: this.password,
        phone: this.phone,
        dob: this.dob,
        address: this.address,
      });
      this.$router.push({ name: "create-user-confirm" });
    },
  },
};
