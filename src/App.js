import { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import ContactUs from "./components/ContactUs";
import RestaurentMenu from "./components/RestaurentMenu";
import CartPage from "./components/Cart";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";

 // Chunking
 // Lazy Loading or Ondemand loading
 // Code splitting
 // Dynamic loading or bundling
 // Dynamic Import

const Grocery = lazy (() => import("./components/Grocery"));

const AboutUs = lazy(() => import("./components/AboutUs"))

const Applayout = () => {

	const [userName, setUserName] = useState();
	
	// Authentication
	useEffect(() => {
		// Make an Api call and send username and password
		const data ={
			name: "Ashok V"
		}
		setUserName(data.name);
	}, [])
	return (
		<Provider store={appStore}>
			<UserContext.Provider value={{ loggedInUser: userName }}>
				<div className="app">
				<Header />
				<Outlet />
				</div>
			</UserContext.Provider>
		</Provider>
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