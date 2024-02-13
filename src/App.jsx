import React from "react";
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(<App/>)