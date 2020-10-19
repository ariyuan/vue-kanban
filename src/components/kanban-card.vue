<template>
  <div>
    <div class="card">
      <div class="card-body p-2">
        <b-card-title title-tag="h5">title</b-card-title>
        <b-card-text class="small">
          {{ card.name }}
        </b-card-text>

        <cardDetail></cardDetail>
        <v-chip x-small> {{ "Steve Gates" }}</v-chip>
      </div>
    </div>
  </div>
</template>

<script>
import cardDetail from "./card-detail";

export default {
  components: {
    cardDetail,
  },
  props: ["card"],
  methods: {
    openDetail() {
      console.log("Open card detail");
    },
  },
};
</script>