import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
	const [logInLogoutBtn, setLoginLogout] = useState("login");
	 
	const onlineStatus = useOnlineStatus()
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
						<Link to="/cartpage">Cart</Link>
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
				</ul>
			</div>
		</div>
	)
}

export default Header;