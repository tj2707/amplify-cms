import { ContentItem } from '@/components/content/_domain';
import { API } from 'aws-amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { listContentItems } from '@/app-modules/graphql/queries';
import { ListContentItemsQuery } from '@/app-modules/graphql/api';
import { createContentItem } from '@/app-modules/graphql/mutations';

interface ContentState {
  content: ContentItem[];
}

const state: ContentState = {
  content: []
};

const getters: GetterTree<ContentState, null> = {
  content: (state: ContentState): ContentItem[] => state.content
};

const mutations: MutationTree<ContentState> = {
  setContent(state: ContentState, content: ContentItem[]) {
    state.content = content;
  }
};

const actions: ActionTree<ContentState, null> = {
  async syncContent({ commit }): Promise<void> {
    const results = await API.graphql({
      query: listContentItems
    }) as GraphQLResult<ListContentItemsQuery>;

    const content = results.data.listContentItems.items || [];
    commit('setContent', content);
  },
  async addContent({ commit }, content: ContentItem): Promise<void> {
    const { id, ...queryBody } = content;

    await API.graphql({
      query: createContentItem,
      variables: { input: queryBody }
    });
  }
};

const content: Module<ContentState, null> = {
  state,
  getters,
  actions,
  mutations
};

export { content };
