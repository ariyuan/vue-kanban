<template>
  <div class="container-fluid mt-5">
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
      columns: this.$store.state.columns
    };
  },
};
</script>
