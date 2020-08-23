import client from "~/plugins/contentful";

export const state = () => ({
  posts: null,
  people: null
});

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts;
  },
  updatePeople: (state, people) => {
    state.people = people;
  }
};

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "blogPost",
        order: '-fields.publishDate'
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  },
  async getPeople({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: "person"
      });
      if (response.items.length > 0) {
        commit("updatePeople", response.items.sort((a, b) => {
          return a.fields.name < b.fields.name ? 1 : (a.fields.name > b.fields.name ? -1 : 0)
        }))
      }
    } catch (err) {
      console.error(err);
    }
  }
  
};
