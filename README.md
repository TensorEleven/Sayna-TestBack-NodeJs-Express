# Sayna-TestBack-NodeJs-Express

## About
Simple authentication api with Node.js, Express and MongoDB

## How to use this api
--------------------------------
### Home
Request home with method GET at '/'

Success will return status 200
If fail return notfound.html page with 404 error

---------------------------------

### Login
To autheticate user on login, use POST method at '/login'

#### if user is checked, API will return : 
-> status : 200 
-> res : {
  error:false,
  mesage:"L'utilisateur a été authenfifier",
  tokens:{
    token : XXXX,
    refreshToken : XXX
    createdAt: XXXXX
    }
}

#### if any data is missing
-> status 401
-> res{
  error : true,
  message : "L'email/password manquant"
}

### if many attempt
-> status : 409,
-> message : "bcp de tentative"


