import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";

const Header = () => {
	const [logInLogoutBtn, setLoginLogout] = useState("login");
	 
	const onlineStatus = useOnlineStatus();

	const { loggedInUser } = useContext(UserContext);

	// subscribing to the store using selector
	const cartItems = useSelector((store) => store.cart.items);
	console.log(cartItems);

	return(
		<div className= "header">
			<div className="logo-container">
				<img 
					className="logo" 
					src={LOGO_URL}
				/>
			</div>
			<div className="nav-item">
				<ul>
					<li>
						online Status: {onlineStatus? "✅" : "❌" }
					</li>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/grocery">Grocery</Link>
					</li>
					<li>
						<Link to="/cartpage">Cart ({cartItems.length})</Link>
					</li>
					<button 
						className="login-btn" 
						onClick={() => {
							logInLogoutBtn === "login"
							 ? setLoginLogout("Logout") 
							 : setLoginLogout("login");
						}}
					>
					{logInLogoutBtn}
					</button>
					<li>{loggedInUser}</li>
				</ul>
			</div>
		</div>
	)
}

export default Header;