<template>
  <div>
    <a href="#" @click="$bvModal.show(card_id)" class="float-right">...</a>

    <b-modal :id="card_id" :title="card.title" size="lg">
      <div id="card-detail" class="container row">
        <div class="col-9">
          <span>Description:</span>
          <b-form-textarea
            id="textarea"
            v-model="card.desc"
            placeholder="Description placeholder"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <br />
          <v-select
            :items="$store.state.candidate_point"
            label="Story Point"
            outlined
            v-model="card.point"
            @change="onPointChanged"
          ></v-select>
        </div>
        <v-divider class="mx-2" vertical></v-divider>
        <div class="col-2">
          <span>Assignee:</span>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {
      card_id: this._.uniqueId("card_"),
    };
  },
  mounted() {},
  methods:{
    onPointChanged(){
      console.log(this.card.point)
    }
  }
};
</script>

<style scoped>
#card-detail {
  min-height: 200px;
}
</style>