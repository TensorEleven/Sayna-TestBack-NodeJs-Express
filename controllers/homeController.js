class homeController{
    static getHome (req,res){
        res.sendFile('index.html')
    }
}

module.exports = homeController