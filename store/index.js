// import createPersistedState from "vuex-persistedstate";

// export const plugins = [createPersistedState]

export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment(state) {
      state.counter++
    }
  }