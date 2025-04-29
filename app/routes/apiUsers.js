import express from 'express'
import { changePassword, createUser, deleteUser, getAllUsers, getUserById, loginUser, logOutUser, makeAdmin, readUser, removeAdmin, updateProfile, updateUser } from '../controllers/userControler.js';


const router = express.Router();

export default router


// All Routes 

router.post("/create-user", createUser);
router.get("/read-user", readUser);
router.put("/update-user" , updateUser);
router.delete("/delete-user", deleteUser);
router.get("/get-all-users", getAllUsers);
router.get("/user/:id", getUserById);
router.post("/login", loginUser);
router.post("/logout", logOutUser);
router.put("/change-password", changePassword);
router.put("/update-profile", updateProfile);
router.put("/make-admin/:id", makeAdmin);
router.put("/remove-admin/:id", removeAdmin);




