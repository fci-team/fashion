// ** react router imports
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// ** pages imports
import { Home } from "./pages";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        {/* <Navbar /> */}

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
          path: "/users",
          // element: <Users />,
        },
        {
          path: "/products",
          // element: <Products />,
        },
        {
          path: "/products/:id",
          // element: <SingleProduct />,
        },
        {
          path: "/users/:id",
          // element: <SingleUser />,
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
