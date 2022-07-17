import express from "express"; 
import { 
    getAllUsers,
    createUsers,
    // getAllUsersById,
    // updateUsers,
    // deleteUsers
} from "../controller/users.js";
 
const router = express.Router();
 
router.get('/', getAllUsers);
// router.get('/:id', getAllUsersById);
router.post('/', createUsers);
// router.patch('/:id', updateUsers);
// router.delete('/:id', deleteUsers);
 
export default router;

 
