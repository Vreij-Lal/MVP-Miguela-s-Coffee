//importing HomePage Components
import Navbar from "./Navbar";
import LoginSignup from "./LoginSignup";
import WhoWeAre from "./WhoWeAre";
import TypesOfCoffee from "./TypesOfCoffee";
import ComingSoon from "./ComingSoon";
import ImagesGrid from "./ImagesGrid";
import Footer from "./Footer";

function HomePage(){
    return (
        <main>
            <Navbar/>
            <LoginSignup/>
            <WhoWeAre/>
            <TypesOfCoffee/>
            <ComingSoon/>
            <ImagesGrid/>
            <Footer/>   
        </main>
    );
}

export default HomePage;