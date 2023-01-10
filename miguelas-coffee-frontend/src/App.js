import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
//importing router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>
    },
  
    {
      path: "/home",
      element:<HomePage/>
    },
    {
      path:"/aboutUs",
      element:<AboutUs/>
    },
    {
      path:"/menu",
      element:<Menu/>
    },
    {
      path:"/galley",
      element:<Gallery/>
    },
    {
      path:"/contactUs",
      element:<ContactUs/>
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
