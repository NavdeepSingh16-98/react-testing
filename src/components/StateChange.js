import { useEffect, useState } from "react"

export const StateChange = () =>{

    const [loaded , setLoaded] = useState(false);
    const [toggleTextVisible , setToggleTextVisible] = useState(false)
    useEffect(()=>{
        setLoaded(true)
    },[]);

    return (
        <div>
            {loaded && <h3>Page Loaded</h3>}
            {toggleTextVisible && <h3>Text Visible</h3>}
            <button onClick={()=>setToggleTextVisible(!toggleTextVisible)}>Toggle Text</button>

        </div>
    )
}