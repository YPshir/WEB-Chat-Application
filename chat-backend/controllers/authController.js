const User = require('../models').User; 
const bcrypt = require('bcrypt');

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    try{

        //search the user
        const user = await User.findOne({
            where:{
                email
            }
        })

        //check if user found 
        if (!user) return res.status(404).json({message:"User NOT Found"});

        //check if password provided matches
        if(!bcrypt.compareSync(password, user.password)) return res.status(401).json({message:"Incorrect Password"});

        // generate auth tokern (jwt)

        return res.send(user)
    } catch(e){

    }
    // return res.send([email,password]);
}

exports.register = async(req,res)=>{

}