<template>
  <div>
    <div class="card">
      <div class="card-body p-2">
        <b-card-title title-tag="h5">{{ card.title }}</b-card-title>

        <b-card-text class="small">
          {{ card.desc }}
        </b-card-text>

        <cardDetail :card="card"></cardDetail>
        <b-badge variant="primary" class="mr-2">{{ card.point }}</b-badge>
        <v-chip x-small>{{ card.owner }}</v-chip>
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