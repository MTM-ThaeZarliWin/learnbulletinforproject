// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    createPost() {
      this.$store.commit("setPostData", {
        title: this.title,
        description: this.description,
      });
      this.$router.push({ name: "create-post-confirm" });
    },
  },
};
