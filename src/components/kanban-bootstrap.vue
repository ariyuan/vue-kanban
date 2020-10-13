<template>
  <div class="container-fluid mt-5">
      <draggable class="row mt-3" :list="columns" group="tasks">
        <kanbanColumn
          v-for="item in columns"
          :key="item.column_name"
          :arrList="item.content"
          :column_name="item.column_name"
          :showAddButton="item.showAddButton"
          :columnclass="item.columnclass"
        ></kanbanColumn>
      </draggable>
  </div>
</template>

<script>
import kanbanColumn from "./kanban-column";
import draggable from "vuedraggable";

export default {
  components: {
    kanbanColumn,
    draggable,
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
