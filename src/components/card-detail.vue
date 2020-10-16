<template>
  <div>
    <a href="#" @click="$bvModal.show(card_id)" class="float-right"
      ><span class="badge badge-primary float-left">{{ story_point }}</span></a
    >

    <b-modal :id="card_id" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      card_id: this._.uniqueId("card_"),
      story_point: 5,
    };
  },
  created() {
    // console.log(this._.uniqueId('contact_'))
  },
};
</script>