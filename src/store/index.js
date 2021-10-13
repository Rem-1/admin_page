import Vuex from 'vuex'
import PostService from '../PostService.js'

export default new Vuex.Store({
    actions:{
        async getBikeList({ commit }) {
            const res = await PostService.getPosts()
            commit('updateBikes', res)
        },
        async deleteBike({ dispatch }, id) {
            await PostService.deletePost(id)

            dispatch('getBikeList')
        },
        async addBike({ dispatch }, data){
            await PostService.insertPost(data)

            dispatch('getBikeList')
        }
    },
    mutations:{
        updateBikes(state, data){
            state.bicycles = data
        }
    },
    state:{
        bicycles: [],
    },
    getters:{
        getTotalBikes(state){
            return state.bicycles.length
        },
        getAvailableBikes(state){
            return state.bicycles.filter(item => item.status === "Available").length
        },
        getBookedBikes(state){
            return state.bicycles.filter(item => item.status === "Busy").length
        },
        getAveregeCost(state){
            let res = (state.bicycles.reduce((acc, b) => (acc += b.price), 0)
            /state.bicycles.length).toFixed(2)
            return res
        }
    }
})