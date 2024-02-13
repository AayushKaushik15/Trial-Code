
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MenuList from './MenuList';
import Shimmer from './Shimmer';
const RestaurantMenu = () => {

    const [dataOne, setData] = useState();

    const {resId}  = useParams();

    if(dataOne === null) return <Shimmer/>

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch (`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.99330&lng=77.02100&restaurantId=${resId}`)
        const data = await response.json();
        setData(data);
        console.log(data)
    }

    const {city, costForTwoMessage, name, avgRating} = dataOne?.data?.cards[0]?.card?.card?.info || {};
    
    const recommendSection = dataOne?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const filterRecommendSection = recommendSection && recommendSection.filter(value => value?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") 
    console.log(filterRecommendSection)


  return (
    <div className='restaurant'>
        <div className='restaurant-menu'>
        <div className='first-box'>
            <h3>{name}</h3>
            <p>{city}</p>
            {/* <p>{cuisines.join(', ')}</p> */}
        </div>
        <div className='second-box'>
            <p>{costForTwoMessage}</p>
            <p><i className="fa-regular fa-star"></i>{avgRating}</p>
        </div>
        </div>

        <div>
            <MenuList menuInfo = {filterRecommendSection} />
        </div>
    </div>
  )
}

export default RestaurantMenu