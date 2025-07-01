const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, 
    cuisines, 
    avgRating ,
     costForTwo, 
     deliveryTime,
      } = resData?.info; 
      //optional chaining

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/${resData.info.cloudinaryImageId}`}
        alt={resData.info.name}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4> {avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
