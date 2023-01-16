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

                <div>
                    <img className="user-homepage-cart-images" src={item.img} alt=""/>
                </div>

                <div>
                    <button  onClick={() => handleChange(item, 1)}>+</button>
                    <button>{item.amount}</button>
                    <button onClick={() => handleChange(item, -1)}>-</button>
                </div>

                <div>
                    <span></span>
                    <button className="user-homepage-menu-buttons" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
          </div>
        ))}

        <div className="cart-total-section">
          <div className="cart-total-section-text">Total Price of your Cart</div>
          <div className="cart-total-section-price">$ - {price}</div>
        </div>

      </section>
    );
}
export default UserHomepageCart;