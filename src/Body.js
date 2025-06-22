import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  // Local State Variable -Super powerful variable
  const [ListofRestaurant, setListofRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // whenever state variable update ,react trigger a reconcilaliation cycle(re-renders the component)
  /** other methods to write use state
 1.) const arr = useState(resList)
   const[ ListofRestaurant , setListofRestaurant] =arr
   
 2.)const arr = useState(resList)
const ListofRestaurant = arr[0]
const setListofRestaurant= arr[1]
*/
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1374256&lng=78.0188218&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    console.log(json);
    setListofRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //CONDITION RENDERING
  if (ListofRestaurant.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body ">
      <div className="search">
        <h4>Reastaurant with online food delivery in Agra </h4>
      </div>

      <div className="filter">
        <div className="seearch">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant cards and update the UI
              //serach text
              console.log(searchText);
              const filteredRestaurant = ListofRestaurant.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //  filter logic
            const filteredList = ListofRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListofRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
