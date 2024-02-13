import React, { useState } from "react";
import swiggyBodyData from "../constant/swiggyBodyData";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import ShimmerError from "./ShimmerError";
import { Link } from "react-router-dom";

const Body = () => {
  const [stringValue, setValue] = useState();
  const [notFound, setNotFound] = useState(false);
  
  const searchHandler = (e) => {
    setValue(e.target.value);
    setNotFound(false);
  };


  const { swiggyFirstData,setFirstData, cloneData} = swiggyBodyData();



  const clickSearch = () => {
    const searchItem = cloneData.filter((value) =>
      value?.info?.name.toLowerCase().includes(stringValue.toLowerCase())
    );
    setFirstData(searchItem);
    
    
    if (searchItem.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };

  if (notFound === true) return <ShimmerError/>

  const filterByRating = (rating) => {
    const filtered = cloneData.filter((value) => value?.info?.avgRating > rating);
    setFirstData(filtered);
    setNotFound(false);  
  };

  if (swiggyFirstData.length == 0) {
    return <Shimmer/>
  }

  return (
    <div className="body-container">
      <div className="form-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search for food..."
            value={stringValue}
            onChange={searchHandler}
          />
          <button onClick={clickSearch}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <select className="options">
          <option>Sort Rating</option>
          <option
            value="4" onClick={() => filterByRating(4)}>
            Greater than 4
          </option>
          <option value="4" onClick={() => filterByRating(4)}>Smaller than 4</option>
        </select>
      </div>
      <div className="cards">
        {swiggyFirstData && swiggyFirstData.map((value) => (
          <Link to={"restaurants/"+value.info.id}>
            <Cards cardInfo={value} key={value.info.id}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
