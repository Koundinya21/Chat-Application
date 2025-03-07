import User from '../models/user.model.js';

export const getUserForSidebar=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;

        // Every User in database but not the current authenticated user
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")

        res.status(200).json(filteredUsers)


    }catch(error){
        console.log("Error in getUserForSidebar: ",error.message);
        res.status(500).json({error:"internal Server Error"});
    }
}