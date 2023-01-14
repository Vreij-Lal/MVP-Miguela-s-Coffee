let navbarLogo = require("./images/logo_transparent.png");
function Navbar() {
    return(
        <header>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li className="navbar-list-items"><a className="navbar-link" href="/home">Home</a></li>
                    <li className="navbar-list-items"><a className="navbar-link" href="/menu">Menu</a></li>
                    <li className="navbar-list-items"><img src={navbarLogo} alt="" id="navbar-logo"/></li>
                    <li className="navbar-list-items"><a className="navbar-link" href="/aboutUs">About Us</a></li>
                    <li className="navbar-list-items"><a className="navbar-link" href="/contactUs">Contact us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;