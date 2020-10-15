<template>
  <div>
    <b-card>
      <b-card-title title-tag="h5">title</b-card-title>
      <b-card-text class="small">
        {{ card.name }}
      </b-card-text>
      
      
      <cardDetail></cardDetail>
    </b-card>
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