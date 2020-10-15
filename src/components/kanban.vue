<template>
  <div class="container mt-5">
    <div class="row mt-3">

      <div class="col-md-3 p-2 alert-primary">
        <h3>Backlog</h3>
        <draggable class="list-group" :list="arrBacklog" group="tasks">
            <div class="list-group-item" v-for="item in arrBacklog" :key="item.name">
                {{item.name}}
            </div>
        </draggable>
      </div>

      <div class="col-md-3 p-2 alert-secondary">
        <h3>In Progress</h3>
        <draggable class="list-group" :list="arrInProgress" group="tasks">
            <div class="list-group-item" v-for="item in arrInProgress" :key="item.name">
                {{item.name}}
            </div>
        </draggable>
      </div>
      
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      arrBacklog: [
        { name: "Test feature 1" },
        { name: "Test feature 2" },
        { name: "Test feature 3" },
      ],
      arrInProgress: []
    };
  },
};
</script>