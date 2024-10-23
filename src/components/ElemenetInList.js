import { useState } from "react"

//useState
export const ElementInList = ()=>{

    const data = [{
        id:1,
        name:'Jagnoor'
    },
    {
        id:2,
        name:'Navdeep'
    },
    {
        id:3,
        name:'Nikhil'
    }];

    const [elements,setElements] = useState(data)
    return(
        <div>
            <h3>List</h3>
            <ul>
                {

elements && elements.map((el)=>(
    <li key={el.id} data-testid='record'>{el.id}:{el.name}</li>
)

)
                }
            </ul>
            <button onClick={()=>setElements([
                ...elements,
                {
                    id:4,
                    name:'Abhinav'
                }])
            }>Add To List</button>
            <button onClick={()=>{
            setElements(elements.filter((item)=>item.id !== 2))    
            }}>Remove from list</button>
        </div>
    )

}