import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const RestaurantsMenu = () => {
  // state variable
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4826846&lng=74.0189955&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const json = await response.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error('Fetch error: ', error);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwo, totalRatingsString } =
    resInfo?.cards?.[2]?.card?.card?.info ?? {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ?? [];

  console.log(itemCards);


  const groupedCard = resInfo?.cards?.[4]?.groupedCard;
  const cardGroupMap = groupedCard?.cardGroupMap?.REGULAR;
  const cardsArray = cardGroupMap?.cards ?? [];
  const categories =
    cardsArray.filter(
      (c) => c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Dish"
    )

  console.log(categories);



  return (
    <div className="menu p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-2">{name}</h1>
      <h4 className="text-lg text-gray-600 mb-4">{totalRatingsString}</h4>
      <div className="text-gray-800 mb-6">{cuisines?.join(', ')}</div>

      <h1 className="text-xl font-semibold mb-4">Menu</h1>

      <ul className="list-disc list-inside space-y-2">
        {itemCards.length > 0 &&
          itemCards.map((item) => (
            <li key={item.card.info.id} className="text-gray-700">
              {item.card.info.name} - <span className="font-semibold">RS {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>
            </li>
          ))}
      </ul>
    </div>
  );

};

export default RestaurantsMenu;
