import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
      dialogTitle: "",
      // dialog: false,
      // isDeleteDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Post Title",
          value: "title",
        },
        {
          text: "Post Desciption",
          value: "description",
        },
        {
          text: "Posted User",
          value: "created_user",
        },
        {
          text: "Deleted User",
          value: "deleted_user",
        },
        {
          text: "Operation",
          value: "operation",
        },
      ],
      postList: [],
      showPostList: [],
      userList: [],
      showUserList: [],
      deleteID: null,
      deleteDialog: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
    headers() {
      if (!this.isLoggedIn) {
        return this.headerList.slice(0, this.headerList.length - 1);
      } else {
        return this.headerList;
      }
    },
    postListWithUser() {
      let userList = this.userList;
      return this.postList.map(function(post) {
        let createdUser = userList.find(function(user) {
          return post.created_user_id == user.id;
        });
        if (post.deleted_user_id) {
          let deletedUser = userList.find((user) => {
            return post.deleted_user_id == user.id;
          });
          post["deleted_user"] = deletedUser.name;
        }
        post["created_user"] = createdUser.name;
        return post;
      });
    },
  },
  async beforeMount() {
    await this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
      })
      .catch((err) => {
        console.log(err);
      });
    await this.$axios
      .get("/post/list")
      .then((response) => {
        this.postList = response.data.post_list;
        console.log(this.postList);
        // this.showPostList = this.postList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    /**
     * This is to filter posts of datatable.
     * @returns void
     */
    filterPosts() {
      this.showPostList = this.postList.filter((post) => {
        return (
          post.title.includes(this.keyword) ||
          post.description.includes(this.keyword) ||
          post.created_user.includes(this.keyword)
        );
      });
    },
    deleteConfirm(id) {
      this.deleteDialog = true;
      this.deleteID = id;
    },
    deletepost(id) {
      this.$axios
        .delete("/delete/post/" + id)
        .then((response) => {
          console.log(response);
          // let i = this.postList.map((item) => item.id).indexOf(this.deleteID); // find index of your object
          // this.postList.splice(i, 1);
          this.deleteDialog = false;
        })
        .catch((err) => {
          console.log(err.response);
          return err;
        });
    },
  },
};
