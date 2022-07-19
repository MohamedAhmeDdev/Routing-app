import login from "../module/LoginModule.js";


export const getAllLogin = async(req, res) => {
    try {
        const logins = await login.findAll();
        res.json(logins);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 


export const createLogin = async (req, res) => {
    try {
        await login.create(req.body);
        res.json({
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const deleteLogin = async (req, res) => {
    try {
        await login.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "login Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 