const User = require("../modules/userModule");


const signUp = async (req, res) => {
    let user = await User.findOne({username:req.body.username});
    if(user){
        res.send({message:"user already exists"});
    }
    else{
        let newUser = new User({username:req.body.username, password:req.body.password});
        newUser.save();
        res.send({message: true});
    }
}


const login = async (req, res) => {
    let user = await User.findOne({username:req.body.username});
    if (user){
        if(user.password === req.body.password){
        res.send(user);
        }
        else{
            res.send({message: "wrong password"});
        }
    }
    else{
        res.send({message:"wrong username"});
    }   
}


module.exports = {
    signUp,
    login
}