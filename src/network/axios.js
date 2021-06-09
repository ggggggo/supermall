import Axios from 'axios'

export default function axios(option){
  return new Promise((res,rej)=>{
    const instance = Axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    instance(option).then((data)=>{
      res(data.data)
    }).catch((data)=>{
      rej(data)
    })
  })
}