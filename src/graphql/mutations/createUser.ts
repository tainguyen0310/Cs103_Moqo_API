import User from "../models/User";
// import bcrypt from "bcrypt";
// create a new user
export const createUser = async (args: any) => {    
    // const {name, email, password } = args.user;
    // try{
    //     const existingUser = await User.findOne({ email });
    //     if (existingUser) {
    //         return Promise.reject(new Error("User already exists"));
    //     }
    //     const hashedPassword = await bcrypt.hash(password, 12);
    //     console.log("hashedPassword: ", hashedPassword)
    //     const newUser = await User.create({
    //         name,
    //         email,
    //         password: hashedPassword,
    //     })
    //     return newUser;
    // } catch (err) {
    //     throw err;
    // }
    const  user = new User({ name: args.name, email: args.email, password: args.password });
    return user.save();   
}
