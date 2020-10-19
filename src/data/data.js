import Vuex from 'vuex';
import Vue from 'vue'

Vue.use(Vuex);
const store = new Vuex.Store({ //定义vuex对象store
    state: {
        columns: [
            {
              column_name: "Backlog",
              content: [
                { name: "Code Sign Up page" },
                { name: "Test DashBoard" },
                { name: "style Reg" },
                { name: "Help with Designs1" },
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