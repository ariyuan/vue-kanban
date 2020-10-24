<template>
  <div>
    <a href="#" @click="$bvModal.show(card_id)" class="float-right">...</a>

    <b-modal :id="card_id" :title="card.title" size="lg">
      <div id="card-detail" class="container row">
        <div class="col-9">
          <span>Description:</span>
          <b-form-textarea
            id="textarea"
            class="mt-2"
            v-model="card.desc"
            placeholder="Description placeholder"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <br />
        </div>
        <v-divider class="mx-2" vertical></v-divider>
        <div class="col">
          <span>Assignee:</span>
          <div class="row container p-0 my-2">
            <div class="col-10">
              <v-chip class="ma-2" color="primary" outlined pill>
                {{ card.owner }}
              </v-chip>
            </div>
          </div>
          <span>Story Point:</span>
          <b-form-select
            @change="onPointChanged"
            v-model="card.point"
            :options="$store.state.candidate_point"
            size="sm"
            class="mt-3"
          ></b-form-select>
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
      items: this.$store.state.candidate_point,
      value: "",
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