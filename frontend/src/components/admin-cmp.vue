<template>
  <section class="admin-page" v-if="forms">
    <h1>Users forms</h1>
    <div class="admin-content flex">
      <el-table
        :data="forms"
        :default-sort="{ prop: 'name', order: 'descending' }"
        style="width: 100%"
      >
        <el-table-column prop="name" label="Name" width="180" sortable>
        </el-table-column>
        <el-table-column prop="lastName" label="lastName" width="180" sortable>
        </el-table-column>
        <el-table-column prop="email" label="email" width="180" sortable>
        </el-table-column>
        <el-table-column prop="web" label="web" width="180" sortable>
        </el-table-column>
        <el-table-column prop="experience" label="experience" width="180">
        </el-table-column>
        <el-table-column prop="budget" label="budget" width="180" sortable>
        </el-table-column>
        <el-table-column prop="date" label="date" width="180" sortable>
        </el-table-column>
        <el-table-column prop="password" label="password" width="180" sortable>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="primary" @click="backHome">Back</el-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      forms: "",
    };
  },
  async created() {
    console.log(this.getForms());
    this.forms = await this.$store.dispatch({ type: "getForms" });
    console.log("this.forms :>> ", this.forms);
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    getForms() {
      console.log(
        "this.$store.getters.getForms :>> ",
        this.$store.getters.getForms
      );
      return this.$store.getters.getForms;
    },
  },
  computed: {},
};
</script>