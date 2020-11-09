<template>
  <b-container class="mt-5 ml-2">
    <b-row>
      <b-col cols="10">
        <draggable class="mt-3 row" :list="columns" group="columns">
          <kanbanColumn
            v-for="item in columns"
            :key="item.column_name"
            :arrList="item.content"
            :column_name="item.column_name"
            :showAddButton="item.showAddButton"
            :columnclass="item.columnclass"
          ></kanbanColumn>
        </draggable>
      </b-col>
      <b-col class="mt-3">
        <a href="" @click.prevent="addNewColumn(newColumnToAdd)"
          >New Column</a
        ></b-col
      >
    </b-row>
  </b-container>
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
      columns: this.$store.state.columns,
      newColumnToAdd: {
        column_name: "NewColumn",
        content: [],
        showAddButton: false,
        columnclass: "alert-primary",
      },
    };
  },
  methods: {
    addNewColumn(newColumn) {
      this.columns.push(newColumn);
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 8px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>