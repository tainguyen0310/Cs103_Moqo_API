import User from "../models/User"
import bcrypt from "bcrypt"

export const login = async (parent: any, args: any, context: any, info: any) => {
    const { email, password } = args.user;
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        throw new Error("User does not exist");
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password as string);
    if (!isPasswordCorrect) {
        throw new Error("Invalid password");
    }
    return existingUser;
}
