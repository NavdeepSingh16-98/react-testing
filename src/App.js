import logo from './logo.svg';
import './App.css';
import { ApiCall } from './components/ApiCall';
//ApiCall
// import { ElementInList } from './components/ElemenetInList';
//ElementInList

function App() {
  // const data = [
  //   {
  //     id:1,
  //     name:"Jagnoor"
  //   },
  //   {
  //     id:2,
  //     name:"Navdeep"
  //   },
  //   {
  //     id:3,
  //     name:"Nikhil"
  //   },
  // ]
  return (
    <div className="App">
     {/* <ElementInList data={data}/> */}
     <ApiCall/>
    </div>
  );
}

export default App;
