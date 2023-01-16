

function UserHomepageMenuCards({item, handleClick}){
    let {name, price, img} = item;

    return(
        <div className="user-homepage-menu-cards">
            <div >
                <img src={img} className="user-homepage-menu-cards-images"/>
            </div>
            <div>
            <p>{name}</p>
            <p>Price - ${price}</p>
            <button className="user-homepage-menu-buttons" onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
      </div>
    );
}
export default UserHomepageMenuCards;