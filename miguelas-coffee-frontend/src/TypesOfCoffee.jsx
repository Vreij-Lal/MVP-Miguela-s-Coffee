let a = require("./images/a.jpg");
let b = require("./images/b.jpg");
let c = require("./images/c.jpg");
let d = require("./images/d.jpg");

function TypesOfCoffee(){
    return(
        <section className="types-of-coffee-section">

            <div className="types-of-coffee-card">
                <img className="types-of-coffee-card-images" src={a}/>
                <div>
                    <h4>Hot Beverages</h4> 
                    <p>des</p> 
                </div>
            </div>

            <div className="types-of-coffee-card">
                <img className="types-of-coffee-card-images" src={b}/>
                <div>
                    <h4>Combos</h4> 
                    <p>desc</p> 
                </div>
            </div>

            <div className="types-of-coffee-card">
                <img className="types-of-coffee-card-images" src={c}/>
                <div>
                    <h4>Cold Beverages</h4> 
                    <p>desc</p> 
                </div>
            </div>

            <div className="types-of-coffee-card">
                <img className="types-of-coffee-card-images" src={d}/>
                <div>
                    <h4>Donuts</h4> 
                    <p>desc</p> 
                </div>
            </div>

        </section>
    );
}
export default TypesOfCoffee;