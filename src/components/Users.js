import { useEffect, useState } from "react";
const Users = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(2);
    const {name, city, pincode} = props;
    useEffect(() => {
        // Api call woill be made here
    }, []);
    return( 
        <div className="user-card">
            <h1>Count = {count}</h1>
             <h1>Count = {count2}</h1>
            <h3>{name}</h3>
            <h5>{city}</h5>
            <h5>{pincode}</h5>
        </div>
    )
}

export default Users;