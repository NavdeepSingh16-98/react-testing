import { useEffect, useState } from "react"
import { fetchData } from "../utils/Services"


export const ApiCall = ()=>{
const [data,setData] = useState([]);
useEffect(()=>{
fetchData().then(el => {

    console.log('data received',el)
    setData(el)})
},[])

    return(
        <div>
            {
                data.map(item =>(
                    <div>{item.name}</div>
                ))
            }
        </div>

    )
}