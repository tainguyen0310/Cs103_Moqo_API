import User from "../models/User";
import bcrypt from "bcrypt";

export const updateUser = async (parent: any,args: any,context: any,info: any) => {
    try {
        const {email,name, password} = args.user;
        const existingUser = await User.findOne({ email});
        if (!existingUser) {
            throw new Error("User does not exist");
        }
        if(name){
            existingUser.name = name;
        }
        if(password){
            const hashedPassword = await bcrypt.hash(password, 12);
            existingUser.password = hashedPassword;
        }
        const updatedUser = await User.findByIdAndUpdate(existingUser._id, existingUser, {new: true});
        return updatedUser;
        
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};
