import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
       todos: [
           { id: 1, text: '...', done: true },
           { id: 2, text: '...', done: false },
       ]
   },
   getters: {
       doneTodos: state => {
           return state.todos.filter(todo => todo.done);
       },
       doneTodosCount: (state, getters) => {
           return getters.doneTodos.length
       },
       getTodoById: (state) => (id) => {
           return state.todos.find(todo => todo.id === id)
       }
   }
});

import { mapGetters } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: mapGetters([
        'doneTodos', 'doneTodosCount', 'getTodoById'
    ])
});

console.log(store.getters.getTodoById(48))