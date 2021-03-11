import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        }
    },
    actions: {
        incrementAsync ({ commit }) {
            setTimeout(() => {
                commit('increment')
            }, 1000)
        },
        actionA ({ commit }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('someMutation')
                    resolve()
                }, 1000)
            })
        },
        actionB ({ dispatch, commit }) {
            return dispatch('actionA').then(() => {
                commit('someOtherMutation')
            })
        },
        async actionC ({ commit }) {
            commit('gotData', await getData())
        },
        async actionD ({ dispatch, commit} ) {
            await dispatch('actionC')
            commit('gotOtherData', await getOtherData())
        }
    }
})

import { mapState, mapMutations } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: mapState([ 'count' ]),
    methods: {
        increment () {
            this.$store.dispatch('incrementAsync');
        },
        decrement () {
            this.$store.commit('decrement');
        },
        testAction () {
            this.$store.dispatch('actionA').then(() => {
                
            })
        }
    }
});
