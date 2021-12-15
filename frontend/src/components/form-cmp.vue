<template>
  <section>
    <form>
      <h1>Form</h1>
      <label>
        First name:
        <input type="text" />
      </label>
      <label>
        Last name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        Web address:
        <input type="url" />
      </label>
      <label>
        Web address:
        <input type="url" />
      </label>
      <label>
        LinkdIn profile address:
        <input type="url" />
      </label>
      <label>
        <span
          >How many years of experience do you have with Facebook
          Marketing?</span
        >
        <select>
          <option value="">no experience</option>
          <option value="">0-1 years</option>
          <option value="">1-2 years</option>
          <option value="">2 or more years</option>
        </select>
      </label>
      <label>
        <span
          >What was the biggest campaign budget you have managed in a single
          month?</span
        >
        <el-slider v-model="value"></el-slider>
      </label>
      <button @submit="add">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value:0
    }
  },
  methods: {
    add() {
      console.log('add');
    }
  }
};
</script>

<style>
</style>