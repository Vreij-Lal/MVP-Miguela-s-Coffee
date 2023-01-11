const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 3636;
const cors = require("cors");


app.use(bodyparser.json());


app.use(cors({origin: "*"}));


app.listen(port, () => {
    console.log(`listening to port:${port}`);
})
