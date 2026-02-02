import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Applayout = () => {
	return (
	<div className="app">
		<Header/>
		<Body />
	</div>
	)
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Applayout />
	},
	{
		path: "/about",
		element: <AboutUs />
	},
	{
		path: "/contact",
		element: <ContactUs />
	}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);