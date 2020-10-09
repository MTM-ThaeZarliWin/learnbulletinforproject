import { mapGetters } from "vuex";
export default {
  data() {
    return {
      postInfo: null,
      dialogTitle: "",
      dialog: false,
      isDeleteDialog: false,
      headerList: [
        {
          text: "ID",
          align: "start",
          value: "id",
        },
        {
          text: "Name",
          value: "name",
        },
        {
          text: "Email",
          value: "email",
        },
        {
          text: "Address",
          value: "address",
        },
        {
          text: "Created User",
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
    getUserList() {
      let userList = this.userList;
      // if (userList.deleted_user_id) {
      //   return this.userList.map((user) => {
      //     let deletedUser = userList.find((user) => {
      //       return user.deleted_user_id == user.id;
      //     });
      //     user["deleted_user"] = deletedUser.name;
      //     return user;
      //   });
      // }
      return this.userList.map((userData) => {
        let createdUser = userList.find((user) => {
          return userData.created_user_id == user.id;
        });
        if (userData.deleted_user_id) {
          let deletedUser = userList.find((user) => {
            return userData.deleted_user_id == user.id;
          });
          userData["deleted_user"] = deletedUser.name;
        }
        userData["created_user"] = createdUser.name;
        return userData;
      });

      // return variable;
    },
  },
  beforeMount() {
    this.$axios
      .get("/user/list")
      .then((response) => {
        this.userList = response.data.user_list;
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
    deleteuser(id) {
      this.$axios
        .delete("/delete/user/" + id)
        .then((response) => {
          console.log(response);
          // this.userlist.splice(this.userlist.indexOf(id), 1);
          this.deleteDialog = false;
        })
        .catch((err) => {
          console.log(err.response);
          return err;
        });
    },
  },
};
