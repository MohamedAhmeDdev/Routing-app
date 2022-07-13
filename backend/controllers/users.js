import users from "../models/usersModels.js"


export const getAllUsers = async(req,res) => {
    try{
        const users = await users.findAll();
        res.json(users);
    }catch(error){
        res.json({ message: error.message });
    }
}


export const createUsers = async (req, res) => {
    try {
        await users.create(req.body);
        res.json({
            "message": "Users Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
