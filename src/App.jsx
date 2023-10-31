// ** react router imports
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// ** pages imports
import { Home } from "./pages";

// ** components import
import { Navbar } from "./components";
import SignUp from "./pages/SignUp";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />

        <Outlet />

        {/* <Footer /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "/login",
      // element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
