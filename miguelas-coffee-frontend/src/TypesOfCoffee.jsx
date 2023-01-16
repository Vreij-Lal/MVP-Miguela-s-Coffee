let a = require("./images/a.jpg");
let b = require("./images/b.jpg");
let c = require("./images/c.jpg");
let d = require("./images/d.jpg");

function TypesOfCoffee(){
    return(
        <section className="types-of-coffee-section">

            <div className="types-of-coffee-card">
                
                <div className="types-of-coffee-content-container">
                    <img className="types-of-coffee-card-images" src={a}/>
                    <h4 className="types-of-coffee-section-header">Hot Beverages</h4> 
                    <p className="types-of-coffee-section-paragraph">Try out our hot beverages, made by the best steamers!</p> 
                    <button className="types-of-coffee-section-buttons">Check it Out !</button>
                </div>
            </div>

            <div className="types-of-coffee-card">
                
                <div className="types-of-coffee-content-container">
                    <img className="types-of-coffee-card-images" src={b}/>
                    <h4 className="types-of-coffee-section-header">Combos</h4> 
                    <p className="types-of-coffee-section-paragraph">Craving a sweet treat with your coffee? get a combo now!</p>
                    <button className="types-of-coffee-section-buttons">Check it Out !</button>
                </div>
            </div>

            <div className="types-of-coffee-card">
                
                <div className="types-of-coffee-content-container">
                    <img className="types-of-coffee-card-images" src={c}/>
                    <h4 className="types-of-coffee-section-header">Cold Beverages</h4> 
                    <p className="types-of-coffee-section-paragraph">cold coffee, get your cold coffee, it won get any colder!</p> 
                    <button className="types-of-coffee-section-buttons">Check it Out !</button>
                </div>
            </div>

            <div className="types-of-coffee-card">
                
                <div className="types-of-coffee-content-container">
                    <img className="types-of-coffee-card-images" src={d}/>
                    <h4 className="types-of-coffee-section-header">Donuts</h4> 
                    <p className="types-of-coffee-section-paragraph">sometimes a tasty treat is what you need to get going! no coffee? no problem!</p>
                    <button className="types-of-coffee-section-buttons">Check it Out !</button>
                </div>
            </div>

        </section>
    );
}
export default TypesOfCoffee;