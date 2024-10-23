import { render,screen } from "@testing-library/react";
import { StateChange } from "../components/StateChange";
import userEvent from "@testing-library/user-event";
//userEvent
//StateChange

test('Detecting State Change',()=>{

    render(<StateChange/>);

    expect(screen.getByText(/Page loaded/i)).toBeInTheDocument();
})

test('toggle text testing',async ()=>{


    toggleFunction = jest.fn();

    render(<StateChange/>);
    await userEvent.click(screen.getByText(/Toggle Text/i))
    expect(screen.getByText(/text Visible/i)).toBeInTheDocument()
})