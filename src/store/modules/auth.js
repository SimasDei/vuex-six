const state = {
  token: null,
  userRole: 'guest',
};
const getters = {
  isLoggedIn: currentState => !!currentState.token,
};
const mutations = {
  SET_TOKEN: (currentState, token) => {
    currentState.token = token;
  },
};
const actions = {
  logout: ({ commit }) => {
    commit('SET_TOKEN', null);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
