const user = require('../models/userModel')
const validator = require ('email-validator')

class registerController{
    static async createUser (req,res){
        let newUser = new user
        newUser.firstname = req.body.firstname 
        newUser.lastname = req.body.lastname
        newUser.email = req.body.email
        newUser.dateDeNaissaonce = req.body.dateDeNaissaonce
        newUser.sexe = req.body.sexe 

        //encrypted password
        newUser.password = req.body.password

        //generate tokens
        newUser.tokens.createdAt = Date.now()
        newUser.tokens.token ='thisvdknlvznisatoken'
        newUser.tokens.refreshToken ='refreashfrefrech'

        //check required field
        if(!(newUser.email&&newUser.password)){
            res.json({
                error:true,
                message:'l\'une ou plusieur donnée obligatoire sont manquante'
            })
        }

        //check valid info
        else if(!validator.validate(newUser.email)){
            res.json({
                error:true,
                message:'l\'un des données n\'est pas conforme'
            })
        }
        else {
            let result = await user.findOne({email:newUser.email})
            if(result){
                res.json({
                    error:true,
                    message:'votre mail n\'est pas correcte'
                })
            }
            else{
                newUser.save((err,u)=>{
                    //console.log(u)
                    if (err) res.send(err)
                    res.json({
                        error : false,
                        message : 'L\'utilisateur a bien été créé avec succés',
                        tokens : u.tokens
                    })
                })
            }
        }
    }
}

module.exports = registerController