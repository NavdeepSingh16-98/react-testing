import {render, screen ,fireEvent} from '@testing-library/react'
import  TestWithMockData  from '../components/TestWithMockData'
import userEvent from '@testing-library/user-event'
//import {jest} from '@testing-library/jest-dom'
const mockData = [
    {
        "id": 1,
        "first_name": "Fletcher",
        "last_name": "McVanamy",
        "email": "mmcvanamy0@e-recht24.de",
        "age": 30
      }, {
        "id": 2,
        "first_name": "Clarice",
        "last_name": "Harrild",
        "email": "charrild1@dion.ne.jp",
        "age": 35
      }, 
      {
        "id": 3,
        "first_name": "Amby",
        "last_name": "Emmer",
        "email": "aemmer2@buzzfeed.com",
        "age": 67
    }
]

test("Ordered list renders", () => {
    render(<TestWithMockData data={mockData} displayUnorderedList={false} />)
  
    expect(screen.getByText(/McVanamy/i)).toBeInTheDocument()
  })

test("Email link click handler called",async ()=>{

  // const mockClick = jest.fn();
    // render(<TestWithMockData data={mockData} displayUnorderedList={true}/>)

    // const element = screen.getByText(/fletcher/i);
    // expect(screen.getByText(/fletcher/i)).toBeInTheDocument();
    const mockHandleClick = jest.fn();
    render(<TestWithMockData 
                data={mockData} 
                displayUnorderedList={true}
                handleClick = {mockHandleClick}
          />)
    await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
    expect(mockHandleClick).toHaveBeenCalled();
})

test('Email link handler clicked 2',async()=>{

  const mockHandleClick = jest.fn();

  render(<TestWithMockData data={mockData} displayUnorderedList={true} handleClick={mockHandleClick}/>);



  await userEvent.click(screen.getByText(/mmcvanamy0@e-recht24.de/i));
  expect(mockHandleClick).toHaveBeenCalled()

})