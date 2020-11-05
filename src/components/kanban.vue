<template>
  <div class="container-fluid mt-5 ml-2">
    <el-row :gutter="20">
      <draggable class="row mt-3" :list="columns" group="columns">
        <kanbanColumn
          v-for="item in columns"
          :key="item.column_name"
          :arrList="item.content"
          :column_name="item.column_name"
          :showAddButton="item.showAddButton"
          :columnclass="item.columnclass"
        ></kanbanColumn>
      </draggable>
    </el-row>
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
      columns: this.$store.state.columns,
    };
  },
  mounted() {
    console.log("kanban mounted");
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