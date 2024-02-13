import React from "react";
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import RestaurantMenu from "./Components/RestaurantMenu";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter ([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/restaurants/:resId",
                element : <RestaurantMenu/>
            },

        ]
    }
])



const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(<RouterProvider router = {appRouter}/>)