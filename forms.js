import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true, // synchronous deep watch around the state tree which watches for any inappropriate mutations -> ensure we are not directly changing the state from within our application
    state: {
        message: 'Hello Vuex',
    },
    mutations: {
        updateMessage (state, message) {
            state.message = message
        }
    }
})

import { mapState } from 'vuex';

new Vue({ 
    el: '#app',
    store,
    data: {
    },
    computed: {
        message: {
            get () {
                return this.$store.state.message
            },
            set (value) {
                this.$store.commit('updateMessage', value)
            }
        }
    },
    methods: {
        updateMessage (e) {
            this.$store.commit('updateMessage', e.target.value)
        }
    }
})


//template
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <div id="app">
            {{message}}<br>
            <input v-model='message' />
        </div>
        <script src="index.pack.js"></script>
    </body>
</html>