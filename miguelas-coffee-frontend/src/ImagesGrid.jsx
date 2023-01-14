let a = require("../src/images/images-grid/a.jpg");
let b = require("../src/images/images-grid/b.jpg");
let c = require("../src/images/images-grid/c.jpg");
let d = require("../src/images/images-grid/d.jpg");

let e = require("../src/images/images-grid/e.jpg");
let f = require("../src/images/images-grid/f.jpg");
let g = require("../src/images/images-grid/g.jpg");
let h = require("../src/images/images-grid/h.jpg");
let i = require("../src/images/images-grid/i.jpg");
let j = require("../src/images/images-grid/j.jpg");

function ImagesGrid(){
    return(
        <section className="images-grid-section">
            <div className="images-grid-item">
                <img className="grid-image" src={a} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={b} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={c} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={d} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={e} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={f} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={g} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={h} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={i} alt="" />
            </div>
            <div className="images-grid-item">
                <img className="grid-image" src={j} alt="" />
            </div>
        </section>
    );
}
export default ImagesGrid;

{/*<div className="images-grid-item-"></div>*/}