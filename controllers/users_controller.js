module.exports.profile = function(req, res){
    return res.render('user_profile', { //'user_profile' is view name
        title : "Profile Page"
    })
} 

module.exports.signUp = function(req, res){
    return res.render('user_sign_up', { //'user_sign_up' is view name
        title : 'codeial| Sign up'
    })
}

module.exports.signIn = function(req, res){
    return res.render('user_sign_in', { //'user_sign_in' is view name
        title : 'Codeial | Sign In'
    })
}