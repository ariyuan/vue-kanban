<template>
  <v-app>
    <div id="app">
      <kanban></kanban>
    </div>
  </v-app>
</template>

<script>
import kanban from "@/components/kanban-bootstrap";

export default {
  name: "App",
  components:{
    kanban
  }
};
</script>

<style>


</style>
