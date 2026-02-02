import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const Header = () => {
	const [logInLogoutBtn, setLoginLogout] = useState("login");
	
	//if no Dependency array => useEffect will call on every render
	// if the dependency array is empty = [] => useEffect will call only in intiial render just once when the comp renders
	useEffect(()=> {
		console.log("useEffect is called");
	}, []);
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
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
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