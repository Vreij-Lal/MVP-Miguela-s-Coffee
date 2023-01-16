import UserHomepageMenuObjectArray from "./UserHomepageMenuObjectArray";
import UserHomepageMenuCards from "./UserHomepageMenuCards";

function UserHomepageMenu({handleClick}){
    return(
        <section className="user-homepage-menu-section">
            {UserHomepageMenuObjectArray.map( (element) => (<UserHomepageMenuCards key={element.id} item={element} handleClick={handleClick}/>) )}
        </section>
    );
}
export default UserHomepageMenu;