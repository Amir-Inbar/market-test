<template>
  <section class="form-cmp main-container">
    <form @submit.prevent="add" class="flex main-latout">
      <h1>Form</h1>
      <label>
        <span>First name:</span>
        <input type="text" v-model="user.fName" />
      </label>
      <label>
        <span>Last name:</span>
        <input type="text" v-model="user.lName" />
      </label>
      <label>
        <span>Email:</span>
        <input type="email" v-model="user.email"/>
      </label>
      <label>
        <span>Web address:</span>
        <input type="url" v-model="user.webUrl" />
      </label>
      <label>
        <span>LinkdIn profile address:</span>
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
        data: Date.now()
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