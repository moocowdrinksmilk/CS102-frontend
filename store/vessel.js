export const state = () =>({
    abbrvslm : "",
    voyageName : ""
})

export const mutations = {
    SET_VESSEL: (state, payload) => {
        state.abbrvslm = payload.abbrvslm
        state.voyageName = payload.voyageName
        console.log(state);
    }
}

export const actions = {
    GET_VESSEL(context, payload) {
        context.commit('vessel/SET_VESSEL', payload, { root: true })
    }
}