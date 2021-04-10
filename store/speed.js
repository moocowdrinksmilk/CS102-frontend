export const state = () =>({
    vesselSpeed:[],
    vesselTime:[]
})

export const mutations = {
    SET_SPEED: (state, payload) => {
        state.vesselSpeed = payload.vesselSpeed
        state.vesselTime = payload.vesselTime
    }
}

export const actions = {
    GET_SPEED(context, payload){
        context.commit('speed/SET_SPEED', payload, {root:true})
    }
}