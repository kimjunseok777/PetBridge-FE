import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './libs/route';
import Layout from './pages/layout/container';
import "./fonts/font.css"


function App() {
  return (
    <Layout>
      <RouterProvider router={router}/>
    </Layout>
  );
}

export default App;

