const user = require ('../models/userModel')
const jwt = require ('jsonwebtoken')

class loginController{
    static async login (req, res){
        // Our login logic starts here
        try {
          // Get user input
          const { email, password } = req.body;
      
          // Validate user input
          if (!(email && password)){
            res.status(400).status().send("Un ou polusieur champ obligatoire non rempli");
          }
          // Validate if user exist in our database
          const newUser = await user.findOne({ email });
      
          if (newUser && (await bcrypt.compare(password, newUser.password))){
            // user
            res.status(201).json({
              error : false,
              message : 'Utilisateur authentifié',
              tokens : {
                  token : newUser.tokens.token,
                  refreshToken : newUser.tokens.refreshToken,
                  createdAt : newUser.tokens.createdAt
              }
          })
          }
          res.status(400).send("Mots de passe ou email invalid");

        }catch (err) {
          console.log(err);
        }
    }
}

module.exports = loginController