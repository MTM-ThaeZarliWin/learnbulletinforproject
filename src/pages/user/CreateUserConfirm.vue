<template>
  <v-container>
    <h2>Create User Confirm</h2>
    <v-form class="form-wd" v-on:submit.prevent="setUserInfo" id="form">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-subheader>Name</v-subheader>
            <!-- <v-text-field
              label="Enter username"
              name="name"
              v-show="disiable"
            ></v-text-field> -->
          </v-col>
          <v-col cols="8">
            <p>{{ userList.name }}</p>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Email</v-subheader>
          </v-col>
          <v-col cols="8">
            <p>{{ userList.email }}</p>
            <!-- <v-text-field label="Enter email" v-show="disiable"></v-text-field> -->
          </v-col>
        </v-row>

        <!-- <v-row>
          <v-col cols="4">
            <v-subheader>User Type</v-subheader>
          </v-col>
          <v-col cols="8">
            <p v-if="type == 0">Admin</p>
            <p v-else>User</p>
            <v-text-field
              label="Enter Type"
              v-model="type"
              name="type"
              v-show="disiable"
            ></v-text-field>
          </v-col>
        </v-row> -->

        <v-row>
          <v-col cols="4">
            <v-subheader>Phone</v-subheader>
          </v-col>
          <v-col cols="8">
            <p>{{ userList.phone }}</p>
            <!-- <v-text-field
              label="Enter Phone No"
              name="phone"
              v-show="disiable"
            ></v-text-field> -->
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Date of birth</v-subheader>
          </v-col>
          <v-col cols="8">
            <p>{{ userList.dob }}</p>
            <!-- <v-text-field
              label="Enter birth date"
              type="date"
              name="dob"
              v-show="disiable"
            ></v-text-field> -->
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Address</v-subheader>
          </v-col>
          <v-col cols="8">
            <p>{{ userList.address }}</p>
            <!-- <v-text-field
              label="Enter Address"
              name="address"
              v-show="disiable"
            ></v-text-field> -->
          </v-col>
        </v-row>

        <!-- <v-row>
          <v-col cols="4">
            <v-subheader>Profile</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="profile.name"
              name="profile"
              v-show="disiable"
            ></v-text-field>
            <img id="preview" alt="img" width="100" heigth="100" />
          </v-col>
        </v-row> -->

        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn color="primary" type="submit">Confirm</v-btn>
            <v-btn color="light" type="reset">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script src="../../services/pages/user/create-user-confirm.js">