

// Create Route

export const createUser = async (req, res) =>{
    return res.send("User created successfully")
}

// Read route

export const readUser = async (req, res) =>{
    return res.send("User read successfully")
}

// Update Route 
export const updateUser = async (req, res) =>{
    return res.send("User updated successfully")
}

// Delete Route 
export const deleteUser = async (req, res) =>{
    return res.send("User deleted successfully")
}

// Get All users Route 
export const getAllUsers = async (req, res) =>{
    return res.send("All users fetched successfully")
}
// Get User by ID
export const getUserById = async (req, res) =>{
    return res.send("User fetched by ID")
}
// User Login

export const loginUser = async (req, res) =>{
    return res.send("User login successful")
}

// User Logout
export const logOutUser = async (req, res) =>{
    return res.send("User logout successful")
}
// Change Password
export const changePassword = async (req, res) =>{
    return res.send("User password change successful")
}
// Update Profile
export const updateProfile = async (req, res) =>{
    return res.send("User profile update successful")
}
// Make Admin
export const makeAdmin = async (req, res) =>{
    return res.send("User made admin successfully")
}

// Remove Admin

export const removeAdmin = async (req, res) =>{
    return res.send("Admin role removed successfully")
}

// Search Users
export const searchUsers = async (req, res) =>{
    return res.send(" User search completed successfully")
}
// Filter Users
export const filterUsers = async (req, res) =>{
    return res.send("User filter completed successfully")
}
// Block User
export const blockUser = async (req, res) =>{
    return res.send("User blocked successfully")
}

// Unblock User
export const unblockUser = async (req, res) =>{
    return res.send("User unblocked successfully")
}
// Verify Email
export const verifyEmail = async (req, res) =>{
    return res.send(" Email verified successfully")
}

// Resend Verification
export const resendVerification = async (req, res) =>{
    return res.send(" Verification email resent")
}

// Upload Profile Picture

export const uploadProfilePicture = async (req, res) =>{
    return res.send(" Profile picture uploaded successfully")
}

// Delete Account
export const deleteAccount = async (req, res) =>{
    return res.send(" Account deleted successfully")
}

