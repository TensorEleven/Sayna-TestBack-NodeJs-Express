class homeController{
    static getHome (req,res){
        res.status(200).sendFile('index.html')
    }
}

module.exports = homeController