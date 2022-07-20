import user from "../module/userModule.js";


export const verifyUser = async(req, res) => {
   console.log(req.body);
   const { userEmail, password}  = req.body

   if (!userEmail || !password) return res.sendStatus(400);

   const foundUser = await user.findOne({where: { userEmail: userEmail, password: password }})

   if (!foundUser) {
   return  res.sendStatus(401)            
   }else{
    return res.json({'message': 'success'})
   }
}
 