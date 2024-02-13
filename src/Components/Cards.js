import React from 'react'

const Cards = ({cardInfo}) => {

    const {name, cloudinaryImageId, avgRating, costForTwo} = cardInfo?.info;

  return (
    <div className="card-container">
        <h4>{name}</h4>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/`+cloudinaryImageId} alt="" />
        <div className="toggle">
            <div>
                <i className="fa-regular fa-star"></i> <span>{avgRating}</span>
            </div>
            <span>{costForTwo}</span>
        </div>
    </div>
  )
}

export default Cards