import API from '@/api/imgur';

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
  login: () => {
    API.login();
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
