import express from "express"; 
import { 
    getAllLogin,
    createLogin,
    deleteLogin,
} from "../controller/Log.js";
 
const router = express.Router();
 
router.get('/', getAllLogin);
router.post('/', createLogin);
router.delete('/:id', deleteLogin); 

export default router;

 
