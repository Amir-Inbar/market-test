import { httpService } from "./http.service"


const API = 'market'

  async function addForm(form) {
    return await httpService.post(`${API}`,{form})
}

async function query( ) {
  return await httpService.get(API)
}


function createForm() {
    return {
        name:'',
        lastName:'',
        email:'',
        web:'',
        experience:0,
        budget:0,
    }
}


export const marketSerivce = {
  addForm,
  createForm,
  query
  }