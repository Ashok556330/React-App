import RestaurentCard, {withVegLabel} from "./RestaurentCard";
import Shimmer from "./shimmer";
import {  useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	//local state variable - Super powerful variable
  let [listOfrestaurents, setListOfRestaurents] = useState([]);
  let [filterdResuarent, setFilterdResuarent] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurentCardWithwithVeglabel = withVegLabel(RestaurentCard);

  console.log(listOfrestaurents);
	useEffect(()=>{
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
		const jsonData = await data.json();
		//Optional chaining in javaScript
		setListOfRestaurents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdResuarent(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return(
      <div className="Online-status-Page"> 
        <h1>
          Looks Like you're offline!!. Please check your Internet connection.
        </h1>
      </div>
      
    )
  }

	return listOfrestaurents?.length === 0 ? (
			<Shimmer />
		) :(  
		<div className="body">
				<div className="search-container">
					<input 
            type="text" 
            className="search-input"
            placeholder="Search a restaurant you want..." 
            value={searchText} 
            onChange={(e) => {
              setSearchText(e.target.value);
            }}/>
					<button 
          className="search-btn"
          onClick={() => {
						const filteredResuarent = listOfrestaurents.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            );
              setFilterdResuarent(filteredResuarent);
					}}
          >
            Search
          </button>
          <div className="toprated-btn">
              <button 
              className="filter-btn"
              onClick={() =>{
                const filteredList = listOfrestaurents.filter(
                (res) => res.info.avgRating > 3);
                setListOfRestaurents(filteredList);
              }}
              >
              Top Rated Restaurents
            </button>
          </div>
				</div>
			<div className="restaurent-container"> 
				{
					filterdResuarent.map((restaurent) => (
					<Link 
          key={restaurent.info.id} 
          to={"/restaurent/" + restaurent.info.id}
          >
          { restaurent.info.veg ? ( <RestaurentCardWithwithVeglabel resData={restaurent}/> 
            ) : (
            <RestaurentCard resData={restaurent}/>
          )}
          </Link>
				))}
			</div>
		</div>
	)
}

export default Body;