import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carData: [],
    count: 0
  },
  mutations: {
    saveCar(state, arr) {
      localStorage.setItem('carData', JSON.stringify(arr))
      state.carData = arr
      state.count = arr.reduce((acc, val) => {
        return acc + val.count
      }, 0)
    }
  }
})
