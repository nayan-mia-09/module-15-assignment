

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
    return res.send("User update successfully")
}

// Delete Route 
export const deleteUser = async (req, res) =>{
    return res.send("User delete successfully")
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