import RestaurentCard from "./RestaurentCard";
import Shimmer from "./shimmer";
import {  useState, useEffect } from "react";

const Body = () => {
	//local state variable - Super powerful variable
  let [listOfrestaurents, setListOfRestaurents] = useState([]);
  let [filterdResuarent, setFilterdResuarent] = useState([]);
  const [searchText, setSearchText] = useState("");

	useEffect(()=>{
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await data.json();
		//Optional chaining in javaScript
		setListOfRestaurents(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdResuarent(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	}

	return listOfrestaurents.length === 0? (
			<Shimmer />
		) :(  
		<div className="body">
			<div className="filter">
				<div>
					<input 
            type="text" 
            className="serch-box" 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
					<button 
          onClick={() => {
						const filteredResuarent = listOfrestaurents.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            );
              setFilterdResuarent(filteredResuarent);
					}}
          >
            Search
          </button>
				</div>
				<button 
				className="filter-btn"
				onClick={() =>{
					const filteredList = listOfrestaurents.filter(
					(res) => res.info.avgRating > 4);
					setListOfRestaurents(filteredList);
				}}
				>
				Top Rated Restaurents
				</button>
			</div>
			<div className="restaurent-container"> 
				{
					filterdResuarent.map((restaurent) => (
					<RestaurentCard key={restaurent.info.id} resData={restaurent}/>
				))}
			</div>
		</div>
	)
}

export default Body;