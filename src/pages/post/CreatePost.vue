<template>
  <v-container>
    <h2>Create Post</h2>
    <v-form class="form-wd" v-on:submit.prevent="createPost">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Enter title" v-model="title"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              label="Enter description"
              v-model="description"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn color="primary" type="submit" class="mr-4">Create</v-btn>
            <v-btn color="light" type="reset">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script src="../../services/post/create-post.js">
</script>