import jwt from 'jsonwebtoken'

export const verifyUser = (req,res,next) => {
    
    const accessToken = req.cookies.accessToken;
    
    if (!accessToken){
        if (renewToken(req,res)){
            next()
        }
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

const renewToken = (req,res) => {
    const refreshToken = req.cookies.refreshToken;
    let exist = false;
    if (!refreshToken){
        return res.json({valid: false, message: "No Refresh token"})
    }else{
        jwt.verify(refreshToken,"refreshTokenSecreteKey",(err,decoded)=>{
            if(err){
                return res.json({valid:false,message:'invalid refresh token'})
            }else{
                const accessToken = jwt.sign({email:decoded.email},"accessTokenSecreteKey",{expiresIn:'1m'})
                res.cookie('accessToken',accessToken,{maxAge:60000})
                exist = true
            }
        })
    }
    return exist
}