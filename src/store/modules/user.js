import storage from "@/utils/localStorage";
import { resetRouter } from "@/router";
const state = {
  userInfo: {},
  roles: []
};
const actions = {
  resetUserInfo({ commit }) {
    // do loginOut
    commit("changeUserInfo", []);
    storage.remove("token");
    resetRouter();
  }
};
const mutations = {
  changeUserInfo(state, data) {
    // state.userInfo = data;
    // set more info
    state.roles = data.roles || [];
  }
};
export default {
  namespaced: true,
  state,
  actions,
  mutations
};
