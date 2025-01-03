import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './libs/route';
import "./fonts/font.css"


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

