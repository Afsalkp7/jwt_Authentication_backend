import studentCollection from '../model/student.js';
import jwt from "jsonwebtoken"

export const registerStudent = async (req,res) => {
    const {email,password} = req.body;
    await studentCollection.create({email,password})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
}

export const login =  async (req,res) => {
    const {email,password} = req.body;
    await studentCollection.findOne({email})
    .then(user=>{
        if(user){
            if (user.password === password) {
                const accessToken = jwt.sign({email:email},"accessTokenSecreteKey",{expiresIn:'1m'})
                const refreshToken = jwt.sign({email:email},"refreshTokenSecreteKey",{expiresIn:'5m'})
                res.cookie('accessToken',accessToken,{maxAge:60000})
                res.cookie('refreshToken',refreshToken,{maxAge:300000,secure:true,httpOnly:true,sameSite:"strict"})
                return res.json({Login:true})

            }else{
                res.json("password incorrect")
            }
        }else{
            return res.json({Login:false,message:"User data not found"})
        }
    })
    .catch(err=>res.josn(err))
    
    
}