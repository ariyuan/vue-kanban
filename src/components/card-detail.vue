<template>
  <div>
    <a href="#" @click="$bvModal.show(card_id)" class="float-right">...</a>

    <b-modal :id="card_id" title="Card Detail">
      <p class="my-4">Description placeholder</p>
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