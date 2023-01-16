

function UserHomepageMenuCards({item, handleClick}){
    let {name, price, img} = item;

    return(
        <div className="user-homepage-menu-cards">
       
            <img src={img} className="user-homepage-menu-cards-images"/>    

            <div className="user-homepage-description">
                <p className="user-homepage-description-items">{name}</p>
                <p className="user-homepage-description-items">Price - ${price}</p>
                <button className="user-homepage-menu-buttons" onClick={() => handleClick(item)}>Add to Cart</button>
            </div>
      </div>
    );
}
export default UserHomepageMenuCards;