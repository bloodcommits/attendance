import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const SignUp = async(req , res)=>{

    try {
        const {fullName , email , password , confirmPassword  } = req.body;
        
        if(password != confirmPassword){
            return res.status(400).json({error:"password do not match"})
        }

        const user = await User.findOne({email});

        if(user){
            res.status(400).json({error:"email already present "})
        }
        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password , salt)

        // // https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullName}`;


		const newUser = new User({
			fullName:fullName,
			email:email,
			password:hashpassword,
			profilePic:boyProfilePic,
		});

if(newUser){
     generateTokenAndSetCookie(newUser._id , res )

    
    await newUser.save();
    
    res.status(201).json({
        _id: newUser._id,
        fullname:newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
    });
    
}

} catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
}

}
export const Login =async (req , res)=>{
    try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}

}
export const LogOut =(req , res)=>{
    try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}

}