//  import * as data from "./data.json"
export const fetchData = ()=>{

   return fetch("./data.json").then(res=>{
        
        // console.log('response received',res.json())
        return res.json()})
//     return new Promise((res,rej)=>{
//         try{

//             // console.log('data',data);
//             res(data.data)
//         }catch(err){

// rej("data not found")
//         }
//     })
}