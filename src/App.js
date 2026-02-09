import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurentMenu from "./components/RestaurentMenu";
import CartPage from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

 // Chunking
 // Lazy Loading or Ondemand loading
 // Code splitting
 // Dynamic loading or bundling
 // Dynamic Import

const Grocery = lazy (() => import("./components/Grocery"));

const AboutUs = lazy(() => import("./components/AboutUs"))

const Applayout = () => {
	return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
	);
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Applayout />,
		children: [
      {
        path: "/",
        element: <Body />
      },
		{
			path: "/about",
			element: <AboutUs />
		},
		{
			path: "/contact",
			element: <ContactUs />
		},
		{
			path: "/grocery",
			element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
		},
		{
			path: "/cartpage",
			element: <Suspense fallback={<h1>Loading....</h1>}><CartPage /></Suspense>
		},
      {
        path: "/restaurent/:resId",
        element: <RestaurentMenu />
      }
		], 
		errorElement: <Error />
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);