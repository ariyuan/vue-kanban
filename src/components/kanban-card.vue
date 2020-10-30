<template>
  <div>
    <div class="card">
      <div class="card-body p-2">
        <b-card-title title-tag="h5">{{ card.title }}</b-card-title>

        <b-card-text class="small">
          {{ card.desc }}
        </b-card-text>

        <cardDetail :card="card" :card_id="card_id"></cardDetail>

        <el-row :gutter="0">
          <el-col :span="4"
            ><b-badge variant="primary">{{
              card.point
            }}</b-badge></el-col
          >
          <el-col :span="18">
            <div class="px-2 mt-1 assignee" color="primary" outlined pill>
              {{ card.owner }}
            </div></el-col
          >
          <el-col :span="1"><a href="#" @click="$bvModal.show(card_id)" class="float-right">...</a></el-col>
        </el-row>
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
  data() {
    return {
      card_id: this._.uniqueId('card_')
    }
  },
  methods: {
    openDetail() {
      console.log("Open card detail");
    },
  },
};
</script>

<style scoped>
.assignee {
  border-radius: 1rem;
  background-color: darkgray;
  width: fit-content;
  font-size: small;
}
</style>