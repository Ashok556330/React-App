import { CDN_URL } from "../utils/constants";
const RestaurentCard = (props) => {
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info;
	return(
		<div className="res-card">
			<img
				className="res-logo"
				alt="res-logo" 
				src={CDN_URL + cloudinaryImageId}
			/>
				
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <span>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </span>
				
		</div>
	)
}


//High OrderComponet: Takes Restaurent Componet as a Input and will return RestaurentCardWithwithVeglabel as a component
export const withVegLabel = (RestaurentCard) => {
  return(props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 rounded-lg">Veg</label>
        <RestaurentCard {...props}/>
      </div>
    )
  }
}



export default RestaurentCard;