import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Shop from "./Components/Body/Shop/Shop"
import Orders from './Components/Body/Orders/Orders';
import Inventory from './Components/Body/Inventory/Inventory';
import { Loader } from './Components/Loader/Loader';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <Main></Main>, children: [
        {
          path: "/", element: <Shop></Shop>,
          loader: () => fetch("products.json")
        },
        {
          path: "/shop",
          element: <Shop></Shop>,
          loader: () => fetch("products.json")
        },
        {
          path: "/orders",
          element: <Orders></Orders>,
          loader: Loader
        },
        {
          path: "/inventory", element: <Inventory></Inventory>
        },
        { path: "*", element: <h2>Route Not Found, 404</h2> }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
