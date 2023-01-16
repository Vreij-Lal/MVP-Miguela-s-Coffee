//importing HomePage Components
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs(){
    return (
        <main>
            <Navbar/>
                <div className="about-us-container">
                    <h1 className="about-us-header">About Us</h1>
                    <p className="about-us-paragraph">
                        Miguela's Coffee is an ecomerce website for a startup online coffee shop, our goal is provide our clients with the best of what ui can offer, so that our clients will be able to order or craft their own coffee using Miguela's Coffee website from the comfort of their homes.
                    </p>

                    <h1 className="about-us-header">Our Vision in the future</h1>
                    <p className="about-us-paragraph"> 
                        -Miguela's website will offer their valuable clients to choose from a wide range of recommendations of types of coffee and donuts, by the website according to the client's need.
                        -Miguela's website will offer clients the freedom to craft their own coffee by using an animated coffee maker feature. 
                    </p>

                </div>
            <Footer/>   
        </main>
    );
}

export default AboutUs;