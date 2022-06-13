
const cookies = {
    //creates a cookie with named jwt_token with a users jwt inside
    jwtToken: (res, token, minutes) => {
        res.cookie('jwt_token', token, {
            maxAge: 1000*60*minutes,
            httpOnly: true,
            signed: true
        })
    },
    //creates a cookie named refresh_token with a users jwt inside
    refreshToken: (res, token, minutes) => {
        res.cookie('refresh_token', token, {
            maxAge: 1000*60*minutes,
            httpOnly: true,
            signed: true
        })
    },
}

module.exports = cookies