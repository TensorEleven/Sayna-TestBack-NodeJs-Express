class notFoundController {
    static getNotFound(req,res){
        res.status(404).sendFile('notfound.html', { root: './views' })
    }
}

module.exports = notFoundController