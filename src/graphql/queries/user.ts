import User from "../models/User";

export const user = async (parent: any, args: any, context: any, info: any) => {
    const { email } = args.user;
    const user = await User.findOne({ email });
    return user;
}
