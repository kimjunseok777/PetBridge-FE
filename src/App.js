import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './libs/route';
import "./fonts/font.css"
import PopUpProvider from './store/PopUp.store';


function App() {
  return (
    <PopUpProvider>
      <RouterProvider router={router}/>
    </PopUpProvider>
  );
}

export default App;


