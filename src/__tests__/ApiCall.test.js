import { render , screen, waitFor } from "@testing-library/react";
import * as services from "../utils/Services"
import { ApiCall } from "../components/ApiCall";
//ApiCall

test('fetch api call',async ()=>{

    const mockFetchData = jest.spyOn(services,'fetchData').mockImplementation(async ()=>{
        return [
            {name:"Kunal"}
        ]
    })

    render(<ApiCall/>)
    expect(mockFetchData).toHaveBeenCalled();
    // const element = await screen.getByText(/Kunal/i)
    // expect(element).toBeInTheDocument()
     waitFor(()=>{

        expect(screen.getAllByText(/Kunal/i)).toBeInTheDocument()
    })
})
