import createPersistedState from "vuex-persistedstate";

export const plugins = [process.client ? createPersistedState() : null]
export const state = () =>({
    user_name : null,
    email : null,
    btrDtAlert: true,
    berthNAlert: true,
    statusAlert: true,
    avgSpeedAlert: true,
    distanceToGoAlert: true,
    maxSpeedAlert: true,
    emailOptIn: true,
    authenticated: false
})

export const getters = {
    getUserName: (state) => {
        console.log("sup");
        return state.user_name;
    }
}

export const mutations = {
    SET_USER: (state, payload) => {
        state.user_name = payload.user_name
        state.email = payload.email
        state.berthNAlert = payload.berthNAlert
        state.btrDtAlert = payload.btrDtAlert
        state.statusAlert = payload.statusAlert
        state.avgSpeedAlert = payload.avgSpeedAlert
        state.distanceToGoAlert = payload.distanceToGoAlert
        state.maxSpeedAlert = payload.maxSpeedAlert
        state.emailOptIn = payload.emailOptIn
        state.authenticated = true
        console.log(state);
        // console.log(state);
    },
    DELETE_USER: (state, payload) => {
        state.user_name = null
        state.email = null
        state.berthNAlert = null
        state.btrDtAlert = null
        state.statusAlert = null
        state.avgSpeedAlert = null
        state.distanceToGoAlert = null
        state.maxSpeedAlert = null
        state.emailOptIn = null
        state.authenticated = false
    }
}

export const actions = {
    async GET_USER(context, payload) {
        try{
            let data = await this.$http.$post("http://localhost:8080/user/login", payload)
            context.commit('auth/SET_USER', data, { root: true })
            // this.$router.push("/home")
            console.log(data);
        }catch(error){
            alert("You might have keyed in your username or password wrongly \n\n If you do not have an account, please click the sign up button below to sign up")
        }
    }
}
