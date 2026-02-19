import Users from "./Users";
import UsersClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("parant conscructor");
  }
  
  componentDidMount() {

  }

  render() {
    console.log("parant render");
  return(
    <div className="aboutus-container">
        <div>About us component</div>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            { ({loggedInUser}) => ( <h1>{loggedInUser}</h1>)}
          </UserContext.Consumer>
        </div>
        <h2>This is to chek router</h2>
        <UsersClass name={"first child Ashok Chakravarthy class component"} city={"Vinjanampadu"} pincode={"523301"} />
    </div>
    );
  }
}

export default AboutUs;