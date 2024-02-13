import React, { useState } from 'react'
import swiggyBodyData from '../constant/swiggyBodyData'
import Cards from './Cards';
import Shimmer from "./Shimmer"
const Body = () => {
    
    const [stringValue, setValue] = useState();

    const searchHandler = (e) => {
        setValue(e.target.value)
        console.log(stringValue)
    }

    

    const {swiggyFirstData, setFirstData, setCloneData, cloneData} = swiggyBodyData();
    const bodyCards = swiggyFirstData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    if (bodyCards.length === 0) {
        return <Shimmer/>
    } 


    const clickSearch = () => {
        const searchItem = bodyCards.filter((value) =>
          value?.info?.name.toLowerCase().includes(stringValue.toLowerCase())
        );
        setFirstData(searchItem);
        console.log(searchItem)
      };

  return (
    <div className="body-container">
        <div className="form-container">
        <div className='search'>
            <input type="text" placeholder='Search for food...' value={stringValue} onChange={searchHandler}/>
            <button onClick={clickSearch}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
            <select className='options'> 
                <option>Sort Rating</option>
                <option value="4" onClick={() => {
                    const filterHigh = bodyCards.filter(value => value?.info?.avgRating > 4)
                    setFirstData(filterHigh)
                }}>Greater than 4</option>
                <option value="4">Smaller than 4</option>
            </select>
        </div>
        <div className="cards">
        {
            bodyCards.map((value) => (
                <Cards cardInfo = {value} key={value.info.id}/>
            ))
        }
        </div>
    </div>
  )
}

export default Body