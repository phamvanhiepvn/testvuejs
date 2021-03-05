//import axios from "axios";
const state = {
  user: null,
  contacts: [],
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  stateContacts: (state) => state.contacts,
  stateUser: (state) => state.user,
};

const actions = {

  async logIn({commit}, user) {
    //await axios.post("/v1/account", user);
    await commit("setUser", user.get("email"));
  },

  async createContact({ commit }, data) {
    //await axios.post("/v1/contact", post);
    //return await dispatch("GetContacts");
    //await commit("setContacts", contacts.concat(post));
    const {form: {name = '', job_title = '', company = '', avatar = '', about = ''}, contacts = []} = data;
    commit("setContacts", [{name, job_title, company,avatar, about}, ...contacts]);
  },

  async getContacts({ commit }) {
    const data = [{
        "name": "Dau Ngoc Huy",
        "job_title": "CEO",
        "company": null,
        "avatar": null,
        "about": "mo ta ve huy"
    }]
    let response = {data: data};//await axios.get("/v1/contact?limit=2&page=1&name=minh&id=&company=company_1&sort_by=created&sort_order=desc");
    commit("setContacts", response.data);
  },

  async logOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {
  setUser(state, email) {
    state.user = email;
  },

  setContacts(state, contacts) {
    state.contacts = contacts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
