import { useState, useEffect } from "react";




function swiggyBodyData () {
    const [swiggyFirstData, setFirstData] = useState([]);
    const [cloneData, setCloneData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.99330&lng=77.02100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const message = await response.json();
        setFirstData(message?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setCloneData(message?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return {swiggyFirstData, setFirstData, cloneData, setCloneData};

}

export default swiggyBodyData;