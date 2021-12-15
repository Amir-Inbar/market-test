import Vue from 'vue'
import Vuex from 'vuex'

import {marketSerivce} from '../services/market-service.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    form:"",
    forms:'',
  },
  getters:{
    getForms(){
      return state.forms
    }
  },
  mutations: {
    setForm(state,{updatedForm}) {
      state.form = updatedForm
    },
    setForms(state,{forms}) {
      state.forms = forms
    }
  },
  actions: {
    async setForm({commit,state},{form}){
      try{
        console.log('form action :>> ', form);
        const updatedForm = await marketSerivce.addForm(form)
        commit({type:'setForm',updatedForm})
        return updatedForm
      } catch(err){
        console.log('err :>> ', err);
      }
    },
    async getForms({commit,state}){
      try{
        const forms = await marketSerivce.query()
        commit({type:'setForms',forms})
        return forms
      } catch(err){
        console.log('err :>> ', err);
      }
    }

  },
  modules: {
    
  },
})
