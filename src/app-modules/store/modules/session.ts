import { Auth } from 'aws-amplify';
import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

interface SessionState {
  isLoggedIn: boolean;
}

const state: SessionState = {
  isLoggedIn: false
};

const getters: GetterTree<SessionState, null> = {
  isLoggedIn: (state: SessionState): boolean => state.isLoggedIn
};

const mutations: MutationTree<SessionState> = {
  setIsLoggedIn(state: SessionState, isLoggedIn: boolean) {
    state.isLoggedIn = isLoggedIn;
  }
};

const actions: ActionTree<SessionState, null> = {
  async syncAuth({ commit }): Promise<void> {
    const userInfo = await Auth.currentUserInfo();
    commit('setIsLoggedIn', !!userInfo);
  }
};

const session: Module<SessionState, null> = {
  state,
  getters,
  actions,
  mutations
};

export { session };
