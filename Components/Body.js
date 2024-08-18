// import resList from "../Utils/MockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";


const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log("Body Rendered")


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5011615&lng=73.9359571&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const json = await data.json();

    // console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) return <h1> Looks Like you are Offline!! Please check your internet connection </h1>

  return listOfRestaurants == 0 ? (<Shimmer />) : (
    <div className="body">
      <div className="filter flex">

        <div className="search m-4 p-4">
          <input type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => { setSearchText(e.target.value); }}>
          </input>


          <button
            className="px-2 py-1 bg-green-500 m-2 rounded-lg"
            onClick={() => {

              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredRestaurant);

            }}
          >
            Search
          </button>
        </div>



        <div className="items-center flex">
        <button className="px-2 py-1 bg-green-500 m-2 rounded-lg"
          onClick={() => {
            const filtered = listOfRestaurants.filter((res) => parseFloat(res.info.avgRating) > 4);
            setFilteredRestaurant(filtered)
          }}
        >TOP Rated Restaurants
        </button>
        </div>
        

      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              {restaurant.info.prmoted ?
               (<RestaurantCardPromoted resData={restaurant}/>) 
               :(< RestaurantCard resData={restaurant} />)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;