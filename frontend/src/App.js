import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Header from './components/header/header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    <Header />
    <Home />
    </>,
    errorElement: <div>ERREUR 404 MAGGLE</div>,
  },
    {
      path: "signin",
      element: <>
      <Header />
      <div>Bienvenue sur la page de connexion</div>
      </>
    }
])

function App() {
  return <>
  <RouterProvider router={router}/>
  <Footer/>
  </>
}

export default App;
