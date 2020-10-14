<template>
  <div>
    <b-card>
      <b-card-title title-tag="h5">title</b-card-title>
      <b-card-text class="small">
        {{ card.name }}
      </b-card-text>

      <a href="#" class="card-link">...</a>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["card"],
};
</script>