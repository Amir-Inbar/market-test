<template>
  <section class="admin-page">
    <h1>Users forms</h1>
    <div class="admin-content flex">
      <el-table
        :data="tableData"
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
      tableData: [
        {
          name: "amir",
          lastName: "amir",
          email: "amircode@gmail.com",
          web: "www.amirfds.com",
          date: "2016 - 05 - 03",
          experience: 0,
          budget: 1,
          password: "43rrwe",
        },
        {
          name: "Tom",
          lastName: "amir",
          email: "amircode@gmail.com",
          web: "www.amirfds.com",
          date: "2016 - 05 - 03",
          experience: 0,
          budget: 0,
          password: "43rrwe",
        },
        {
          name: "Tom",
          lastName: "amir",
          email: "amircode@gmail.com",
          web: "www.amirfds.com",
          date: "2016 - 05 - 03",
          experience: 0,
          budget: 0,
          password: "43rrwe",
        },
        {
          name: "Tom",
          lastName: "amir",
          email: "amircode@gmail.com",
          web: "www.amirfds.com",
          date: "2016 - 05 - 03",
          experience: 0,
          budget: 0,
          password: "43rrwe",
        },
      ],
    };
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
};
</script>