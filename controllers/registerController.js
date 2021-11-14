const user = require('../models/userModel')
const validator = require ('email-validator')
//const Cryptr = require ('cryptr')
const dotenv = require ('dotenv')
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')


//secret config for cryptr
dotenv.config({path : './config.env'});

//package for encription and descryption
//setting up pencryption secret world
//let cryptr = new Cryptr(process.env.ENCRYPTION_SECRET)

class registerController{
    
    static async createUser (req,res){
        let newUser = new user
        newUser.firstname = req.body.firstname 
        newUser.lastname = req.body.lastname
        newUser.email = req.body.email
        newUser.dateDeNaissaonce = req.body.dateDeNaissance
        newUser.sexe = req.body.sexe 
        
        //PASSSWORD
        newUser.password = await bcrypt.hash(req.body.password,10)
        
        //MAIL CHECK
        //check required field
        if(!(newUser.email&&newUser.password)){
            res.status(401).json({
                error:true,
                message:'l\'une ou plusieur donnée obligatoire sont manquante'
            })
        }

        //check valid info
        else if(!validator.validate(newUser.email)){
            res.status(401).json({
                error:true,
                message:'l\'un des données n\'est pas conforme'
            })
        }
        else {
            let result = await user.findOne({email:newUser.email})
            if(result){
                res.status(401).json({
                    error:true,
                    message:'Le mail est déjà enregistré'
                })
            }
            else{
                const tokenTMP = jwt.sign({email:newUser.email,password:newUser.password}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "2h"})
                const refreshToken = jwt.sign({email:newUser.email,password:newUser.password}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "15m"})

        //TOKEN
        newUser.tokens.token = tokenTMP
        newUser.tokens.refreshToken = refreshToken
        newUser.tokens.createdAt = Date.now()
                newUser.save((err,u)=>{
                    //console.log(u)
                    if (err) res.send(err)
                    res.status(201).json({
                        error : false,
                        message : 'L\'utilisateur a bien été créé avec succés',
                        tokens : {
                            token : u.tokens.token,
                            refreshToken : u.tokens.refreshToken,
                            createdAt : u.tokens.createdAt
                        }
                    })
                })
            }
        }
    }
}

module.exports = registerController