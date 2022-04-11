const User = require('../models/User')
const { OAuth2Client } = require('google-auth-library')
const jwt = require('jsonwebtoken')

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT)

const createToken = (info, token) => {
    return jwt.sign({ info, token }, process.env.JWT_SECRET, {
        expiresIn: '3h',
    })
}

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
                    const { _id } = user
                    const info = { name, email, picture, id: _id }
                    const tok = createToken(info, token)
                    // User exists, generate token and send back user details
                    res.status(200).json({
                        tok,
                    })
                } else {
                    // User doesnt exist, create new user
                    let newUser = new User({ name, email, picture })

                    const { _id } = newUser
                    const info = { name, email, picture, id: _id }
                    const tok = createToken(info, token)

                    newUser.save((err, data) => {
                        if (err) {
                            return res.status(400).json({
                                error: 'Something went wrong',
                            })
                        }

                        res.status(200).json({
                            tok,
                        })
                    })
                }
            }
        })
    }
}
