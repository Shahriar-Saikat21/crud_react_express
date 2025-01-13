import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {User} from '../models/userModel.js';

export const credentialController = {};

//Login
credentialController.login = async(req,res) => {
    try {
        const user =await User.findOne({userName : req.body.userName});
    
        if(user){
            const passwordCheck = await bcrypt.compare(req.body.password,user.password);

            if(passwordCheck){
                const userObject = {
                    id : user._id,
                    userName : user.userName
                }
                
                //token generate
                const token = jwt.sign(userObject,process.env.JWT_SECRET,{
                    expiresIn : process.env.JWT_EXPIRES_IN
                });
    
                //cookie set
                res.cookie(process.env.COOKIE_NAME,token,{
                    maxAge : process.env.JWT_EXPIRES_IN,
                    httpOnly : true,
                    signed : true,
                });
    
                res.json({
                    success : true
                });

            }else{
                res.json({
                    success : false
                });
            }

        }else{
            res.json({
                success : false
            });
        }    
    } catch (error) {
        res.json({
            message:error.message,
            success:false
        });
    }   
}

//Signup
credentialController.signup = async(req,res) => {
    const hashedPassword = await bcrypt.hash(req.body.password,10);
    const newUser = new User({
        userName : req.body.userName,
        password : hashedPassword
    });

    try {
        await newUser.save();
        res.json({
            success:true
        });
    }catch(error){
        res.json({
            message:error.message,
            success:false
        });
    }
}

//logout
credentialController.logout = async(req,res)=>{
    try{
        res.clearCookie(process.env.COOKIE_NAME);
        res.json({success: true });
    }catch(error){
        res.json({ 
            message:error.message,
            success: true 
        });
    }
    
}
