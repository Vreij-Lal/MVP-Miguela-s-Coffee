import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserHomepageNavbar from "./UserHomepageNavbar";
import UserHomepageMenu from "./UserHomepageMenu";
import UserHomepageCart from "./UserHomepageCart";





function UserHomepage(){
    const username = localStorage.getItem("user") || "no user";
    const [cart, setCart] = useState([]);




    function handleClick(item){
        if(cart.indexOf(item) !== -1){
            return;
        }
        setCart([...cart, item])
    }
        

    function handleChange(item, increment){
        let index = cart.indexOf(item);
        let cartArray = cart;
        cartArray[index].amount += increment;

        if(cartArray[index].amount === 0){
            cartArray[index].amount = 1;
        }
        setCart([...cartArray]);
    }

        useEffect(() => {
            console.log("cart change");
        }, [cart]);

    return(
        <>
        <Navbar/>

        <UserHomepageNavbar/>
        
        <section className="user-homepage-container">
            <UserHomepageMenu handleClick={handleClick}/>
            <UserHomepageCart cart={cart} setCart={setCart} handleChange={handleChange}/>
        </section>

        <Footer/>
        </>
    );
}
export default UserHomepage;