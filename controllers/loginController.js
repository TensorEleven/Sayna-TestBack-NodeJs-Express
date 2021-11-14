const user = require ('../models/userModel')
const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')
class loginController{
    static async login (req, res){
        // Our login logic starts here
        try {
          // Get user input
          let { email, password } = req.body;
      
          // Validate user input
          if (!(email && password)){
            res.status(400).status().send("Email/password manquante");
          }
          // Validate if user exist in our database
          let newUser = await user.findOne({ email });
          console.log(newUser)
          

          if (newUser && (await bcrypt.compare(password,newUser.password))){
            // user
            res.status(200).json({
              error : false,
              message : 'Utilisateur authentifié',
              tokens : {
                  token : newUser.tokens.token,
                  refreshToken : newUser.tokens.refreshToken,
                  createdAt : newUser.tokens.createdAt
              }
          })
          }
          else {
            res.status(400).json({
            error : true,
            message :"Votre mail ou mots de passe est erroné"
          })
        }

        }catch (err) {
          console.log(err);
        }
    }
}

module.exports = loginController