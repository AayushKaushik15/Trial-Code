import React, { useState } from 'react'

const MenuList = ({menuInfo}) => {

    const [menuData, setMenu] = useState();

    console.log(menuInfo)
  return (
    <div>
        {
            menuInfo && menuInfo.map((value) => {
                <h1>{value?.card?.card?.type}</h1>
            })
        }
    </div>
  )
}

export default MenuList