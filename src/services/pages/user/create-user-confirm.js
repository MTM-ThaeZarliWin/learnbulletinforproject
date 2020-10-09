import { mapGetters } from "vuex";
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      address: "",
    };
  },
  computed: {
    ...mapGetters(["userList"]),
  },
  methods: {
    setUserInfo() {
      this.$axios
        .post("/create/user", {
          name: this.userList.name,
          email: this.userList.email,
          password: this.userList.password,
          phone: this.userList.phone,
          dob: this.userList.dob,
          address: this.userList.address,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "user-list" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
