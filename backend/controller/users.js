import users from "../module/userModule.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await Product.findAll();
        res.json(users);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 

export const createUsers = async (req, res) => {
    try {
        await users.create(req.body);
        res.json({
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
