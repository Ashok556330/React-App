import React from "react";

class UsersClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userInfo: {
            name: "",
            location: "",
          }
        }
    }
    async componentDidMount() {
      const data = await fetch("https://api.github.com/users/akshaymarch7");
      const json = await data.json();
      console.log(json);
      this.setState({
        userInfo: json,
      })
    }

    componentDidUpdate() {
      console.log("component Did update is called");
    }

    componentWillUnmount() {
      console.log("componentWillUnmount is called");
    }

    render() {
      const {name, location} = this.state.userInfo;
      console.log(this.state.userInfo);
       return( 
        <div className="user-card">
            <h3>Name: {name}</h3>
            <h5>Location: {location}</h5>
            {/* <h5>{pincode}</h5> */}
        </div>
    )  
    }
}

export default UsersClass;