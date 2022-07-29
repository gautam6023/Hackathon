const User = require("../models/User.model");
const { generateToken, verifyToken } = require("./token.controller");

const signup = async (req, res) => {
    const { email } = req.body;

    if (!email) return res.status(400).json({ message: "Invalid Email" });

    let UserData;
    try {
        UserData = await User.findOne({ email });
        console.log("userdata", UserData, email);
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }

    if (UserData) return res.status(500).json({ message: "User already exists" });

    try {
        UserData = await User.create(req.body);
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }

    try {
        const token = generateToken(UserData);
        res.cookie("token", token, {
            httpOnly: true,
            
        })

        return res.status(201).json({ UserData });
    } catch (err) {
        return res.status(500).send({ err: err.message });
    }
};

const signin = async (req, res) => {
    const { email, password } = req.body;

    let UserData;
    try {
        UserData = await User.findOne({ email });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }

    if (!UserData)
        return res.status(500).json({ message: "No User found of this email" });

    try {
        const match = await UserData.checkpassword(password);
        console.log(match, "match")
        if (!match) {
            return res.status(400).json({ message: "Invalid Password received" });
        }



    } catch (err) {
        return res.status(500).json({ err: err.message });
    }



    try {
        const token = generateToken(UserData);

        res.cookie("token", token, {
            httpOnly: true,
        });


        return res.status(201).json({ UserData });
    } catch (err) {
        return res.status(500).send({ err: err.message });
    }
};

const signout = async (req, res) => {
    res.clearCookie("token");

    // res.redirect("http://localhost:3000/login");

    res.status(200).json({ message: "Signed-out Successfully" });
};

const getUser = async (req, res) => {

    try {

        return res.status(200).json(req.user);
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
};

module.exports = {
    signup,
    signin,
    signout,
    getUser,
};
