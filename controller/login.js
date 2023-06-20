const UserModel = require("../model/userSchema");
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email, !password) {
        res.send({ message: "Required field are missing" })
    }
    else {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "User not found",
            });
        }

        bcryptjs.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: "An error occurred while comparing passwords",
                });
            }

            if (!result) {
                return res.status(401).json({
                    message: "Incorrect password",
                });
            }

            const token = jwt.sign(
                {
                    username: user.username,
                    email: user.email,
                },
                "login process",
                {
                    expiresIn: "24h",
                }
            );

            res.status(200).json({
                username: user.username,
                email: user.email,
                token: token,
            });
        });
    }

}
module.exports = login