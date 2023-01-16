import { useEffect } from "react";
import { useState } from "react";

function UserHomepageCart({cart, setCart, handleChange}){
  
  const [price, setPrice] = useState(0);

  function handleRemove(id){
    let  filteredCartArray = cart.filter((item) => item.id !== id);
    setCart(filteredCartArray);
    handlePrice();
  }

  
  function handlePrice(){
    let result = 0;
    cart.map((item) => (result += item.amount * item.price));
    setPrice(result);
  }


  useEffect(() => {
    handlePrice();
  });



  return(
        <section className="user-homepage-cart-section">
        {cart.map((item) => (
          <div key={item.id} className="user-homepage-cart-item">

                <div className="user-homepage-cart-images-container">
                    <img className="user-homepage-cart-images" src={item.img} alt=""/>
                    
                </div>

                <div className="user-homepage-description-container">
                    <p className="user-homepage-description-container-paragraph">{item.name}</p>
                    <button className="user-cart-btn" onClick={() => handleChange(item, 1)}>+</button>
                    <button id="user-cart-amount-btn">{item.amount}</button>
                    <button className="user-cart-btn" onClick={() => handleChange(item, -1)}>-</button>
                </div>

                <div  className="user-homepage-menu-button-container">
                    <button className="user-homepage-menu-buttons" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
          </div>
        ))}

        <div className="cart-total-section">
          <div className="cart-total-section-text">Total:</div>
          <div className="cart-total-section-price">$ - {price}</div>
        </div>

      </section>
    );
}
export default UserHomepageCart;