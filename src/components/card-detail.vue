<template>
  <div>
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
        <el-divider direction="vertical"></el-divider>
        <div class="col">
          <span>Assignee:</span>
          <div class="my-2">
            <div>
              <el-autocomplete
                class="inline-input"
                v-model="owner"
                :fetch-suggestions="querySearch"
                placeholder="请输入内容"
                @select="handleSelect"
              ></el-autocomplete>
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
  props: ["card", "card_id"],
  data() {
    return {
      items: this.$store.state.candidate_point,
      value: "",
      owner: "",
      owner_candidate: this.$store.state.candidate_owner
    };
  },
  mounted() {},
  methods: {
    onPointChanged() {
      console.log(this.card.point);
    },
    handleSelect(item) {
      console.log(item);
    },
    createFilter(queryString) {
      return (owner) => {
        return (
          owner.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    querySearch(queryString, cb) {
      var owners = this.owner_candidate;
      console.log(owners)
      var results = queryString
        ? owners.filter(this.createFilter(queryString))
        : owners;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
  },
};
</script>

<style scoped>
#card-detail {
  min-height: 200px;
}

.el-divider--vertical {
  display: inline-block;
  width: 1px;
  height: auto;
  margin: 0 8px;
  vertical-align: middle;
  position: relative;
}
</style>