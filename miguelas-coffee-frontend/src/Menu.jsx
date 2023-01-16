import Navbar from "./Navbar";
import Footer from "./Footer";

let img = require("../src/images/menu-page/menu.png");

function Menu(){
    return (
        <>
            <Navbar/>
            
            <section className="nav-link-menu-page-container">
            <h1 className="nav-link-menu-header">Menu with Nutritional facts and caffeine dosage coming soon!</h1>
            <img className="nav-link-menu-img" src={img} alt="" />
            </section>   
            <Footer/>   
        </>
    );
}

export default Menu;