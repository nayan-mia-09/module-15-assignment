import express from 'express'
import { blockUser, changePassword, createUser, deleteAccount, deleteUser, filterUsers, getAllUsers, getUserById, loginUser, logOutUser, makeAdmin, readUser, removeAdmin, resendVerification, searchUsers, unblockUser, updateProfile, updateUser, uploadProfilePicture, verifyEmail } from '../controllers/userControler.js';


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
router.get("/search", searchUsers);
router.get("/filter", filterUsers);
router.patch("/block-user/:id", blockUser);
router.patch("/unblock-user/:id", unblockUser);
router.post("/verify-email", verifyEmail);
router.post("/resend-verification", resendVerification);
router.post("/upload-profile-picture", uploadProfilePicture);
router.delete("/delete-account", deleteAccount);





