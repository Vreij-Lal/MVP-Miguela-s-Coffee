const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const userRouter = require("./routers/userRouter");
const port = 3636;
const cors = require("cors");
app.use(cors({origin: "*"}));

app.use(bodyparser.json());


app.use("/user", userRouter);





app.listen(port, () => {
    console.log(`listening to port:${port}`);
})
