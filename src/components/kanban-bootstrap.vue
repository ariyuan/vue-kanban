<template>
  <div class="container mt-5">
    <div class="row mt-3">
      <kanbanColumn
        v-for="item in columns"
        :key="item.column_name"
        :arrList="item.content"
        :column_name="item.column_name"
        :showAddButton="item.showAddButton"
        :columnclass="item.columnclass"
      ></kanbanColumn>
    </div>
  </div>
</template>

<script>
import kanbanColumn from "./kanban-column";

export default {
  components: {
    kanbanColumn,
  },
  data() {
    return {
      columns: [
        {
          column_name: "Backlog",
          content: [
            { name: "Code Sign Up page" },
            { name: "Test DashBoard" },
            { name: "style Reg" },
            { name: "Help with Designs1" },
          ],
          showAddButton: true,
          columnclass: "alert-primary",
        },
        {
          column_name: "In Progress",
          content: [],
          showAddButton: false,
          columnclass: "alert-secondary",
        },
        {
          column_name: "Tested",
          content: [],
          showAddButton: false,
          columnclass: "alert-warning",
        },
        {
          column_name: "Done",
          content: [],
          showAddButton: false,
          columnclass: "alert-success",
        },
      ],
    };
  },
};
</script>
