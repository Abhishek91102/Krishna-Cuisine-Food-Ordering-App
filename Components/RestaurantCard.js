const RestaurantCard = (props) => {
  const { resData } = props;


  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    // deliveryTime, 
    sla, // sla is also delivery time it only change name of object (deliveryTime to sla)
  } = resData?.info;

  return (
    <div
      className="m-4 p-4 w-[220px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="res-logo rounded-lg"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="Biryani"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};


//High order component 
//promoted label

export const withPromotedLabel = (RestaurantCard) => {
  return(props) => {
    return(
      <div>
       <label>Promoted</label>
       <RestaurantCard {...props}/> 
      </div>
    )
  }
}
export default RestaurantCard;