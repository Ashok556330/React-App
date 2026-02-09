import { useEffect, useState } from "react"

const useRestaurentList = () => {
    const [listOfrestaurents, setListOfRestaurents] = useState([]);
    useEffect(() => {
        fetchRestaurentList();
    })

    const fetchRestaurentList = async () =>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurents(json.data);
    }
    return listOfrestaurents;
}

export default useRestaurentList;