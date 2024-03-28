import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Header from './components/header/header';
import SignIn from './pages/signin/signin';
import UserPage from './pages/userPage/userPage';
import ErrorPage from './pages/errorPage/errorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>
    <Header />
    <Home />
    </>,
    errorElement: <ErrorPage />,
  },
  {
    path: "signin",
    element: <>
    <Header />
    <SignIn />
    </>
  },
  {
    path: "user",
    element: <>
    <Header />
    <UserPage />
    </>
  },

])

function App() {
  return <>
  <RouterProvider router={router}/>
  <Footer/>
  </>
}

export default App;
