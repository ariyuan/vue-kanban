<template>
    <div class="mx-2 px-1 alert col" :class="columnclass">
      <h3>{{ column_name }}({{total_point}})</h3>
      <draggable class="kanban-column" :list="arrList" group="tasks" animation="300" @add="add" @sort="sort">
        <div v-for="ele in arrList" :key="ele.title">
          <card :card="ele"></card>
        </div>
        <div slot="footer">
          <div v-if="showAddButton">
            <a
              href=""
              @click.prevent="onAddingNewBlock = !onAddingNewBlock"
              v-if="!onAddingNewBlock"
              >+ Add new card</a
            >
            <b-form-input
              v-model="newTask.title"
              placeholder="Enter Task"
              @keyup.enter="addTask"
              v-if="onAddingNewBlock"
              @blur="onInputLostfocus()"
            ></b-form-input>
          </div>
        </div>
      </draggable>
    </div>
</template>

<script>
import draggable from "vuedraggable";
import card from "./kanban-card"

function ComposeTask(task){
  return {
    title: task.title,
    desc: "",
    point: 0,
    owner: "",
    status: ""
  };
}

export default {
  components: {
    draggable,
    card
  },
  props: ["showAddButton", "arrList", "columnclass", "column_name"],
  data() {
    return {
      onAddingNewBlock: false,
      newTask: {},
    };
  },
  computed:{
    total_point(){
      let sum = 0;
      this.arrList.forEach(ele=>{
        sum = sum + ele.point;
      })
      return sum;
    }
  },
  methods: {
    onInputLostfocus() {
      this.addTask();
      this.onAddingNewBlock = false;
    },
    addTask() {
      if (this.newTask.title != undefined || this.newTask.title != "") {
        this.arrList.push(ComposeTask(this.newTask));
        this.newTask = {};
        this.onAddingNewBlock = false;
      }
    },
    add(){
      console.log("Dragged");
      console.log(this.$store.state.columns);
      console.log(this);
    },
    sort(){
      console.log("Order changed");
      console.log(this.arrList);
    }
  },
};
</script>

<style scoped>
.kanban-column {
  min-height: 300px;
  max-width: 300px;
  min-width: 200px;
}
</style>