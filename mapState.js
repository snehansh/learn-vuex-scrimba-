import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 3
    }
});

import { mapState } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data() {
        return {
            localCount: 4
        }
    },
    computed: mapState([
        'count'
    ])
});


// {
//         count: state => state.count,
//         countAlias: 'count',
//         countPlusLocalState (state) {
//             return state.count + this.localCount
//         }
//     }