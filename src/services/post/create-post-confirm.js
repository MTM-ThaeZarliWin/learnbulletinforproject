import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["postList"]),
  },
  methods: {
    setPostInfo() {
      this.$axios
        .post("/create/post", {
          title: this.postList.title,
          description: this.postList.description,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "post-list" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
