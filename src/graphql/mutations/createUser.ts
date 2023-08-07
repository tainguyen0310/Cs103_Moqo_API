import User from "../models/User";
import bcrypt from "bcrypt";
// create a new user
export const createUser = async (parent: any, args: any, context: any, info: any) => {    
    const {name, email,phone, password } = args.user;
    try{
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return Promise.reject(new Error("User already exists"));
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
        })
        return newUser;
    } catch (err) {
        throw err;
    }
    
}
