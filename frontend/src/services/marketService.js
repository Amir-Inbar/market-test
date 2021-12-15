export const marketSerivce = {
  add,
  createForm
  }


const API = 'market'

  async function add(form) {
    return await httpService.post(`${API}`,{form})
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

