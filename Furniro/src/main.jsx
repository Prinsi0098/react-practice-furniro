import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import store from './Store/Store.js';
import Home from './Pages/Home.jsx'
import Shop from './Pages/Shop.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Login from './Pages/Login.jsx'
import Signup from './Pages/Signup.jsx'
import WishList from './Pages/WishList.jsx'
import Cart from './Pages/Cart.jsx'
import Success from './Pages/Success.jsx'
import Cancle from './Pages/Cancle.jsx'
import Blog from './Pages/Blog.jsx'
import BlogDetail from './components/Blog/BlogDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path='/wishlist' element={<WishList />} />
      <Route path='/success' element={<Success />} />
      <Route path='/cancel' element={<Cancle />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/blogdetail' element={<BlogDetail />} />
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
