<template>
  <section>
    <nav-bar />
    <form-cmp />
  </section>
</template>

<script>
import navBar from "../components/navbar.vue";
import formCmp from "../components/form-cmp.vue";
export default {
  components: {
    navBar,
    formCmp
  },
};
</script>

