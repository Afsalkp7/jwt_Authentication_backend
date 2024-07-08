import jwt from 'jsonwebtoken'

export const verifyUser = (req,res,next) => {
    
    const accessToken = res.cookies.accessToken;
    
    if (!accessToken){

    }else{
        jwt.verify(accessToken,"accessTokenSecreteKey",(err,decoded)=>{
            if(err){
                return res.json({valid:false,message:'invalid token'})
            }else{
                req.email = decoded.email
                next()
            }
        })
    }

}