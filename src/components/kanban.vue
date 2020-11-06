<template>
  <div class="container-fluid mt-5 ml-2">
    <el-row :gutter="20">
      <el-col :span="21">
        <draggable class="row mt-3" :list="columns" group="columns">
          <kanbanColumn
            v-for="item in columns"
            :key="item.column_name"
            :arrList="item.content"
            :column_name="item.column_name"
            :showAddButton="item.showAddButton"
            :columnclass="item.columnclass"
          ></kanbanColumn> </draggable
      ></el-col>

      <el-col :span="3" class="mt-3">
        <a
          href=""
          @click.prevent="addNewColumn"
          >New Column</a
        ></el-col
      >
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
  methods:
  {
    addNewColumn(){
      console.log("New Column");
    }
  }
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