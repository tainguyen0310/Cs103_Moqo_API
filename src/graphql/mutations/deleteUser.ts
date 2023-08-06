import User from "../models/User";

export const deleteUser = async (parent: any, args: any, context: any, info: any) => {
    const { email } = args.user;
    try {
        const existingUser= await User.findOne({ email });
        if (!existingUser) {
            throw new Error("User does not exist");
        }
        const deletedUser = await User.findOneAndDelete({ email });
        return deletedUser;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error; // Rethrow the error to be handled by the calling function
    }
};