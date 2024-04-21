import { Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer"

import './Layout.scss'

function Layout() {

    return(
        <div className="page">
        
            <Header />
            
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;