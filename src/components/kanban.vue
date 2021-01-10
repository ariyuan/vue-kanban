<template>
  <div :style="kanbanbase">
    <b-container class="mt-5 ml-2" style="max-width: 100% !important">
      <draggable
        class="mt-3 row"
        :list="columns"
        group="columns"
        style="flex-wrap: nowrap !important"
      >
        <kanbanColumn
          v-for="item in columns"
          :key="item.column_name"
          :arrList="item.content"
          :column_name.sync="item.column_name"
          :showAddButton="item.showAddButton"
          :columnclass="item.columnclass"
        ></kanbanColumn>
        <b-col class="mt-3">
          <a href="" @click.prevent="addNewColumn(newColumnToAdd)"
            >New Column</a
          ></b-col
        >
      </draggable>
    </b-container>
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
  computed: {
    kanbanbase() {
      const style = {};
      style.minWidth = (this.columns.length + 1) * 200 + "px";
      return style;
    },
  },
  data() {
    return {
      columns: this.$store.state.columns,
      newColumnToAdd: {
        column_name: "Column",
        content: [],
        showAddButton: false,
        columnclass: "alert-primary",
      },
    };
  },
  methods: {
    addNewColumn(newColumn) {
      var _newColumn = this._.cloneDeep(newColumn)
      this.columns.forEach(item => {
        if(item.column_name == _newColumn.column_name){
          _newColumn.column_name += "1"
        }
      });
      this.columns.push(_newColumn);
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