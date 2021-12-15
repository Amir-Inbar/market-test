export const marketSerivce = {
  add
  }


const API = 'form'

  async function add(form) {
    return await httpService.post(`${API}`,{form})
}


  const userForm = {
      name:'',
      lastName:'',
      email:'',
      web:'',
      experience:0,
      budget:0,
  }


