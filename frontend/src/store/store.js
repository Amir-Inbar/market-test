import Vue from 'vue'
import Vuex from 'vuex'
import {marketService} from '../services/market-service'


Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    form:"",
  },
  mutations: {
    setForm(state,{updatedForm}) {
      state.form = updatedForm
    }
  },
  actions: {
    async setForm({commit,state},{form}){
      try{
        console.log('form action :>> ', form);
        updatedForm = await marketService.add(form)
        commit({type:'setForm',updatedForm})
        return updatedForm
      } catch(err){
        console.log('err :>> ', err);
      }
    }
  },
  modules: {
    
  },
})
