<template>
  <div class="col-md-3">
    <div class="p-2 alert" :class="columnclass">
      <h3>{{ column_name }}</h3>
      <draggable class="kanban-column" :list="arrList" group="tasks">
        <div v-for="ele in arrList" :key="ele.name">
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
              v-model="newTask"
              placeholder="Enter Task"
              @keyup.enter="add"
              v-if="onAddingNewBlock"
              @blur="onInputLostfocus()"
            ></b-form-input>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import card from "./kanban-card"

export default {
  components: {
    draggable,
    card
  },
  props: ["showAddButton", "arrList", "columnclass", "column_name"],
  data() {
    return {
      onAddingNewBlock: false,
      newTask: "",
    };
  },
  methods: {
    onInputLostfocus() {
      this.add();
      this.onAddingNewBlock = false;
    },
    add() {
      if (this.newTask) {
        this.arrList.push({ name: this.newTask });
        this.newTask = "";
        this.onAddingNewBlock = false;
      }
    },
  },
};
</script>

<style scoped>
.kanban-column {
  min-height: 300px;
}
</style>