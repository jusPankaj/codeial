const User = require('../models/user')

module.exports.profile = async function(req, res){

    try{
        if(req.cookies.user_id){
           let validUser = await User.findById(req.user_id);
           
            if(validUser){
                return res.render('user_profile', {
                    title : "User Profile",
                    user : user
                })
            }
            return res.redirect('/users/sign-in');
        }else{
            res.redirect('/users/sign-in');
        }
    }catch(err){
        console.error("Havng issue in showing Profile Page :", err);
    }
    
}
    // return res.render('user_profile', { //'user_profile' is view name
    //     title : "Profile Page"
    // })

//Render the Sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', { //'user_sign_up' is view name
        title : 'codeial| Sign up'
    })
}
//Render the Sign In page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', { //'user_sign_in' is view name
        title : 'Codeial | Sign In'
    })
}

//get the Sign Up data
module.exports.create = async function(req, res){
    //chec whether pasword and confirm passowrd are equal or not
    try{
    if(req.body.password != req.body.confirm_password){
        console.log("Password and confirm_password does not match")
        return res.redirect('back');
    }

    let existingUser = await User.findOne({email: req.body.email}); //find the user by mail

    //If user not found  
    if(!existingUser){
        await User.create(req.body);
        return res.redirect('/users/sign-in');
    }else{
        // return to back or sign-in page
        return res.redirect('back');
    }
    }
    catch(err){
        console.error('Error During user Sign up', err);

        return res.status(500).send("Internal Server Error");
    }
}

// Sign in and create a session for the user
// module.exports.createSession = async function(req, res){
//     try{

//         //handling if validated user id found
//         let validUser = User.findOne({email : req.body.email});
//         if(validUser){
//             // If password mismatch
//             if(validUser.password != validUser.body.password){
//                 return res.redirect('back');
//             }

//             //Handle session creation
//             res.cookies('user_id', validUser.id);
//             return res.redirect('/users/profile');

//         }
//         else{
//             return res.redirect('back');
//         }
//     }catch(err){
//         console.error("Error in finding user in Signing in", err);
//     }
// }


    