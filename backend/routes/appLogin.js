import express from "express"; 
import { 
    verifyUser
} from "../controller/Log.js";
 
const router = express.Router();
 
router.post('/', verifyUser);

export default router;

 
