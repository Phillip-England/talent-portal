
const cookies = {
    //creates a cookie with named jwt_token with a users jwt inside
    jwtToken: (res, token) => {
        res.cookie('jwt_token', token, {
            maxAge: 1000*60*30,
            httpOnly: true,
            signed: true
        })
    },
    //creates a cookie named refresh_token with a users jwt inside
    refreshToken: (res, token) => {
        res.cookie('refresh_token', token, {
            maxAge: 1000*60*35,
            httpOnly: true,
            signed: true
        })
    },
}

module.exports = cookies