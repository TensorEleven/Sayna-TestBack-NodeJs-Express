# Sayna-TestBack-NodeJs-Express

## About
Simple authentication api with Node.js, Express and MongoDB

## How to use this api
--------------------------------
### Home
Request home with method GET at '/'

Success will return status 200
If fail return notfound.html page with 404 error

## HOW TO RUN THE SERVER
### Create config.env file in root 
URI = mongodb+srv://<db_name>:<db_password>@cluster link
DATABASE_LOCAL = mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false
PORT = XXXX
ENCRYPTION_SECRET = XXXXX
ACCESS_TOKEN_SECRET = XXXXX
REFRESH_TOKEN_SECRET = XXXXX

### Setup dependencies
got to api directory and run in a terminale
$ npm install -i

### Run the project
run the project with cli command
$ npm start

---------------------------------

### Login
To autheticate user on login, use POST method at '/login'
To log a user in, data needed are email and password

#### if user is checked, API will return : 
-> status : 200 
-> res : {
  error:false,
  mesage:"L'utilisateur a été authenfifier",
  tokens:{ <br>
&nbsp;&nbsp;token : XXXX,<br>
&nbsp;&nbsp;refreshToken : XXX <br>
&nbsp;&nbsp;createdAt: XXXXX <br>
    }
}

#### if any data is missing
-> status 401
-> res{ <br>
&nbsp;&nbsp;  error : true,<br>
&nbsp;&nbsp;  message : "L'email/password manquant" <br>
}

### if too many attempt
-> status : 409,
-> message : "beaucoup de tentative"

### if email or pawword is misssing 
-> status : 401
-> res { <br>
  error : true, <br>
  message : "Email ou mots de passe erroné"
}

## REGISTER
To register a user, 
Obligatory data are email and password
Optional data are :
firstname,
lastname,
birthdate

Register a user with POST method at '/register'

### if the new user is saved correctly 
-> res { <br>
&nbsp;&nbsp;  error : false, <br>
&nbsp;&nbsp;  message : 'utilisateur crée avec succes', <br>
&nbsp;&nbsp;  tokens :{ <br>
&nbsp;&nbsp;    token : XXXX,<br>
&nbsp;&nbsp;    refreshtoken XXXX <br>
&nbsp;&nbsp;  } <br>
}
