import User from "../models/User";

export const user = async (args : any) => {
    const user = await User.findById(args.id);
    return user;
}
