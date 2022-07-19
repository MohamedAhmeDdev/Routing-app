import express from "express"; 
import { 
    getAllLogin,
    createLogin,
} from "../controller/Log.js";
 
const router = express.Router();
 
router.get('/', getAllLogin);
router.post('/', createLogin);
 
export default router;

 
