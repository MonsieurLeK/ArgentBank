import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Header from './components/header/header';
import SignIn from './pages/signin/signin';

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
      <SignIn />
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
