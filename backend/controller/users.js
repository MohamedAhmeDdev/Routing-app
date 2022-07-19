import user from "../module/userModule.js";


export const getAllUsers = async(req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getUsersById = async (req, res) => {
    try {
        const user = await user.findAll({
            where: {
                id: req.params.id 
            }
        });
        res.json(user[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 

export const createUsers = async (req, res) => {
    try {
        await user.create(req.body);
        res.json({
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}



 
export const deleteUsers = async (req, res) => {
    try {
        await user.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "user Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 