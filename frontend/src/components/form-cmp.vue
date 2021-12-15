<template>
  <section>
    <form @submit.prevent="add">
      <h1>Form</h1>
      <label>
        First name:
        <input type="text" v-model="user.fName" />
      </label>
      <label>
        Last name:
        <input type="text" v-model="user.lName" />
      </label>
      <label>
        Email:
        <input type="email" v-model="user.email"/>
      </label>
      <label>
        Web address:
        <input type="url" v-model="user.webUrl" />
      </label>
      <label>
        LinkdIn profile address:
        <input type="url" v-model="user.LinkdInProfile"/>
      </label>
      <label>
        <span
          >How many years of experience do you have with Facebook
          Marketing?</span
        >
        <select v-model.number="user.experience">
          <option value="0">no experience</option>
          <option value="1">0-1 years</option>
          <option value="2">1-2 years</option>
          <option value="3">2 or more years</option>
        </select>
      </label>
      <label>
        <span
          >What was the biggest campaign budget you have managed in a single
          month?</span
        >
        <el-slider v-model.number="user.budget"></el-slider>
      </label>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value:0,
      user: {
        fName:'',
        lName:'',
        email:'',
        webUrl:'',
        LinkdInProfile: '',
        experience:0,
        budget:0,
      }
    }
  },
  methods: {
    add() {
      this.$store.dispatch({type: 'setForm', form : this.user})
      console.log('user =' , this.user);
    }
  }
};
</script>

<style>
</style>