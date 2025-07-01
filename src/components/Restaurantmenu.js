import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const Restaurantmenu = () => {
  const { resId } = useParams();
  console.log("resId from URL:", resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, areaName, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const regularCards =
    resInfo?.cards?.find(
      (c) => c.card?.card?.groupedCards?.cardGroupMap?.REGULAR
    )?.card?.card?.groupedCards?.cardGroupMap?.REGULAR?.cards || [];

  const menuCard = regularCards.find((c) => c.card?.card?.itemCards);

  const itemCards = menuCard?.card?.card?.itemCards || [];

  // const { itemCards } =
  //   resInfo?.cards?.[3]?.groupedCards?.cardGroupMap?.REGULAR?.cards?.[1]?.card
  //     ?.card;
  console.log(itemCards);
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines?.join(",")}- {costForTwoMessage}
      </p>
      <p>{areaName}</p>
      <h2>Menu </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.id} -
            {(item.card.info.price || item.card.info.defaultprice || 0) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
