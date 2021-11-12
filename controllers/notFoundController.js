class notFoundController {
    static getNotFound(req,res){
        console.log('page requested not found')
        res.sendFile('notfound.html', { root: './views' })
    }
}

module.exports = notFoundController