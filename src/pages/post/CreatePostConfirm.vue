<template>
  <v-container>
    <h2>Create Post Confirm</h2>
    <v-form id="form" v-on:submit.prevent="setPostInfo">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-subheader>Title</v-subheader>
            <!-- <v-text-field name="title" v-show="disible"></v-text-field> -->
          </v-col>
          <v-col cols="8">
            <p>{{ postList.title }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-subheader>Description</v-subheader>
            <!-- <v-text-field name="description" v-show="disible"></v-text-field> -->
          </v-col>
          <v-col cols="8">
            <p>{{ postList.description }}</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn color="primary" type="submit" class="mr-4">Comfirm</v-btn>
            <!-- <v-btn color="light" type="reset">Cancel</v-btn> -->
            <router-link to="/vue/createpost" class="btn btn-light"
              >Cancel</router-link
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script src="../../services/post/create-post-confirm.js">
</script>