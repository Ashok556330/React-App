import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import ResCatagory from "./ResCatagory";

const RestaurentMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null ) return <Shimmer />

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
  resInfo?.cards[4]
    ?.groupedCard
    ?.cardGroupMap
    ?.REGULAR
    ?.cards[4]
    ?.card
    ?.card
    ?.itemCards || [];

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (catagori) => catagori.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
      <div className="text-center pt-16">
          <h3 className="font-bold my-10 text-2xl">{name}</h3>
          <h5>{cuisines?.join(", ")} - {costForTwoMessage}</h5>
          {categories.map((catagory) => {
            return <ResCatagory key={catagory.card.card.title} data={catagory?.card?.card} />;
          })}
      </div>
  )
}

export default RestaurentMenu;