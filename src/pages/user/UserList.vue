<template>
  <v-card>
    <v-card-title>
      User List
      <v-spacer></v-spacer>
      <v-form ref="form">
        <v-row class="filter-bar">
          <v-col md="2.5">
            <v-text-field
              label="Search keyword"
              hide-details="auto"
            ></v-text-field>
          </v-col>
          <v-btn class="post-list-btn mr-4" color="primary">Filter</v-btn>
          <v-btn to="/user/create" class="post-list-btn mr-4" color="primary"
            >Create</v-btn
          >
          <!-- <v-btn class="post-list-btn mr-4" color="primary">Upload</v-btn>
          <v-btn class="post-list-btn mr-4" color="primary">Download</v-btn> -->
        </v-row>
      </v-form>
    </v-card-title>
    <v-container>
      <v-data-table :headers="headers" :items="getUserList">
        <template v-slot:[`item.name`]="{ item }">
          <a v-if="item.name">{{ item.name }}</a>
        </template>
        <template v-slot:[`item.operation`]="{ item }">
          <v-row>
            <div class="operation-btn">
              <v-btn color="primary" class="post-list-btn">Edit</v-btn>
            </div>
            <div class="operation-btn">
              <v-btn
                color="error"
                class="post-list-btn"
                @click="deleteConfirm(item.id)"
                >Delete</v-btn
              >
            </div>
          </v-row>
        </template>
      </v-data-table>
      <v-dialog v-model="deleteDialog" max-width="290">
        <v-card>
          <v-card-title class="headline"
            >Do you want to delete sure?</v-card-title
          >
          <v-card-text>user ID: {{ deleteID }}</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" text @click="deleteDialog = false"
              >Close</v-btn
            >
            <v-btn color="primary" text @click="deleteuser(deleteID)"
              >Delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-card>
</template>
<script src="../../services/pages/user/user-list.js">
</script>
<style scoped src="../../assets/css/pages/user/user-list.css">
</style>