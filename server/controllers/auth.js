const User = require('../models/User')
const { OAuth2Client } = require('google-auth-library')

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT)

// @route   POST api/auth/googleAuth
// @desc    Login user using google authentication
// @access  Public
module.exports.googleLogin = async (req, res) => {
    const { token } = req.body

    const { payload } = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_AUTH_CLIENT,
    })

    const { email_verified, name, email, picture } = payload

    if (email_verified) {
        await User.findOne({ email }).exec((err, user) => {
            if (err) {
                return res.status(400).json({
                    error: 'Something went wrong...',
                })
            } else {
                if (user) {
                    // User exists, generate token and send back user details
                    res.status(200).json({
                        token,
                    })
                } else {
                    // User doesnt exist, create new user
                    let newUser = new User({ name, email, picture })
                    newUser.save((err, data) => {
                        if (err) {
                            return res.status(400).json({
                                error: 'Something went wrong',
                            })
                        }

                        res.status(200).json({
                            token,
                        })
                    })
                }
            }
        })
    }
}
