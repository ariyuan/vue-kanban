import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({ //定义vuex对象store
  state: {
    candidate_point: [1,2,3,5,8],
    columns: [
      {
        column_name: "Backlog",
        content: [
          { title: "title 2", desc: "description 2", point: 2, owner: "Steve Gates" },
          { title: "title 3", desc: "description 3", point: 2, owner: "Steve Gates" },
          { title: "title 1", desc: "description 1", point: 2, owner: "Steve Gates" },
          { title: "title 4", desc: "description 4", point: 2, owner: "Steve Gates" },
        ],
        showAddButton: true,
        columnclass: "alert-primary",
      },
      {
        column_name: "In Progress",
        content: [],
        showAddButton: false,
        columnclass: "alert-secondary",
      },
      {
        column_name: "Tested",
        content: [],
        showAddButton: false,
        columnclass: "alert-warning",
      },
      {
        column_name: "Done",
        content: [],
        showAddButton: false,
        columnclass: "alert-success",
      },
    ]
  },
  mutations: {

  }
})

export default store