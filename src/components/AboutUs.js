import Users from "./Users";
import UsersClass from "./UserClass";
import React from "react";

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
        <h2>This is to chek router</h2>
        <UsersClass name={"first child Ashok Chakravarthy class component"} city={"Vinjanampadu"} pincode={"523301"} />
    </div>
    );
  }
}

export default AboutUs;