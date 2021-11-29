const ScoreBoard = {
    name: 'ScoreBoard',

    props: {
        teamId: String
    },

    computed: {
        team() {
            return this.$store.state.persons[this.teamId];
        }
    },

    methods: {
        incrementScore() {
            this.$store.commit('incrementPoint', this.teamId);
        }
    },

    template: `<div class="score">
		<h3>{{ team.score }} <img src="../assets/webp_images/like.jpg" class="like" @click="incrementScore()"></img> </h3>
		
	</div>`
};

const TeamCard = {
    name: 'TeamCard',

    components: {
        ScoreBoard
    },

    props: {
        teamId: String
    },

    computed: {
        team() {
            return this.$store.state.persons[this.teamId];
        }
    },

    template: `<div class="team">
		<score-board :team-id="teamId">
	</div>`
};

const store = new Vuex.Store({
    state: {
        persons: {
            a: {
                ID: 1,

                score: 0
            },
            b: {
                ID: 2,

                score: 0
            },
            c: {
                ID: 3,

                score: 0
            },
            d: {
                ID: 4,

                score: 0
            },
            e: {
                ID: 5,

                score: 0
            },
            f: {
                ID: 6,

                score: 0
            },
            g: {
                ID: 7,

                score: 0
            },
            h: {
                ID: 8,

                score: 0
            },
            i: {
                ID: 9,

                score: 0
            },
            j: {
                ID: 10,

                score: 0
            },

        }
    },

    mutations: {
        incrementPoint(state, teamId) {
            state.persons[teamId].score++;
        },



        resetScores(state) {
            state.persons.a.score = state.persons.b.score = state.persons.c.score = state.persons.d.score = state.persons.e.score = state.persons.f.score = state.persons.g.score = state.persons.h.score = state.persons.i.score = state.persons.j.score = 0;
        }
    },
});

new Vue({
    el: '#app',
    store,
    components: {
        TeamCard
    },


    methods: {

        resetAll() {
            this.$store.commit('resetScores');
        }
    }
});

function tiim () {
    const a = 'a';
    return a;
}