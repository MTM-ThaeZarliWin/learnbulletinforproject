<template>
  <v-container>
    <h2>Create User</h2>
    <v-form class="form-wd" v-on:submit.prevent="createUser">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-subheader>Name</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field label="Enter username" v-model="name"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Email</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Enter email"
              v-model="email"
              :rules="emailRules"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Password</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Enter Password"
              type="password"
              v-model="password"
              :rules="pwdRules"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- <v-row>
          <v-col cols="4">
            <v-subheader>Confirm Password</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Enter Confirm password"
              type="password"
            ></v-text-field>
          </v-col>
        </v-row> -->

        <!-- <v-row>
          <v-col cols="4">
            <v-subheader>User Type</v-subheader>
          </v-col>
          <v-col cols="8">
            <select v-model="userdata.type">
              <option value="0">Admin</option>
              <option value="1">User</option>
            </select>
          </v-col>
        </v-row> -->

        <v-row>
          <v-col cols="4">
            <v-subheader>Phone</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field label="Enter Phone No" v-model="phone"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Date of birth</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Enter birth date"
              type="date"
              v-model="dob"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>Address</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-text-field
              label="Enter Address"
              v-model="address"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- <v-row>
          <v-col cols="4">
            <v-subheader>Profile</v-subheader>
          </v-col>
          <v-col cols="8">
            <v-file-input
              name="profile"
              type="file"
              v-model="userdata.profile"
              :error-messages="error"
              v-on:change="Preview_image($event)"
            />
            <img id="Preview_image_create" class="Preview_image" />
          </v-col>
        </v-row> -->

        <v-row>
          <v-col cols="12" class="text-center">
            <v-btn color="primary" type="submit">Create</v-btn>
            <v-btn color="light" type="reset" @click="resetForm()"
              >Cancel</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-container>
</template>
<script src="../../services/pages/user/create-user.js">
</script>