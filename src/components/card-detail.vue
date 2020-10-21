<template>
  <div>
    <a href="#" @click="$bvModal.show(card_id)" class="float-right">...</a>

    <b-modal :id="card_id" title="Card Detail" size="lg">
      <div class="container row">
        <div class="col-9">
          <span>Description:</span>
          <b-form-textarea
            id="textarea"
            v-model="text"
            placeholder="Description placeholder"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
        <div class="col-3">
          <span>Assignee</span>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card_id: this._.uniqueId("card_"),
    };
  },
  created() {
    // console.log(this._.uniqueId('contact_'))
  },
};
</script>