import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './libs/route';
import "./fonts/font.css"
import FilterProvider from './store/filterPop.store';


function App() {
  return (
    <FilterProvider>
      <RouterProvider router={router}/>
    </FilterProvider>
  );
}

export default App;


