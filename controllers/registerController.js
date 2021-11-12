const user = require('../models/userModel')

class registerController{
    static async createUser (req,res){
        let newUser = new user
        newUser.firstname = req.body.firstname 
        newUser.lastname = req.body.lastname
        newUser.email = req.body.email
        newUser.dateDeNaissaonce = req.body.dateDeNaissaonce
        newUser.sexe = req.body.sexe 

        //encrypted password

        //generate tokens
        newUser.tokens.createdAt = Date.now()
        newUser.tokens.token ='this vdknlvznis a token'
        newUser.tokens.refreshToken ='refreashfrefrech'

        newUser.save((err,u)=>{
            //console.log(u)
            if (err) res.send(err)
            res.json({
                error : false,
                message : 'L\'utilisateur a bien été créé avec succés',
                tokens :{
                    token : u.token,
                    refreshToken : u.refreshToken,
                    createdAt : u.createdAt
                }
            })
        })
    }
}

module.exports = registerController