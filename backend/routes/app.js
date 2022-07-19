import express from "express"; 
import { 
    getAllUsers,
    createUsers,
    getUsersById,
    deleteUsers
} from "../controller/users.js";
 
const router = express.Router();
 
router.get('/', getAllUsers);
router.get('/:id', getUsersById);
router.post('/', createUsers);
router.delete('/:id', deleteUsers);
 
export default router;

 
