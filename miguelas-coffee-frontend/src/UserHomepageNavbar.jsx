function UserHomepageNavbar({username}){
    return(
        <nav className="user-homepage-navbar">
            <div className="user-homepage-navbar-section">
                
                <div className="user-homepage-navbar-header">
                    Welcome back {username}!
                </div>

                <div className="user-homepage-navbar-header">
                    fill in your cart and get your coffee right away!
                </div>

            </div>
      </nav>
    );
}

export default UserHomepageNavbar;