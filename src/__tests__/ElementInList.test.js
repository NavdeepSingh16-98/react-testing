import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ElementInList } from "../components/ElemenetInList";
// import { act } from "react";
//act
//ElementInList

//userEvent

test('To test element in list',async ()=>{



    render(<ElementInList/>)
    expect(screen.getAllByTestId('record').length).toBe(3)
    await userEvent.click(screen.getByText(/add to list/i))
     expect(screen.getAllByTestId('record').length).toBe(4)
})

test('to test element removed from list ',async ()=>{

    render(<ElementInList/>)
    await userEvent.click(screen.getByText(/remove from list/i));
    expect(screen.getAllByTestId('record').length).toBe(2)
})