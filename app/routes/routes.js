const formidable = require('formidable')
const fs = require('fs')
const path = require('path')
const { v4: uuidv4 } = require('uuid');

const userController = require('../controllers/userController')
const postController = require('../controllers/postController')

function initRoutes(app) {

    // USER ROUTES
    app.get('/api/v1/user', async (req, res)=>{
        userController.getAllUsersData((err, result)=>{
            if(err) res.send(err);
            else res.send(result);
        })
    })

    app.get('/api/v1/user/:Id', async (req, res)=>{
        userController.getUserById(req.params.Id, (err, result)=>{
            if(err) res.send(err);
            else res.send(result);
        })
    })

    app.post('/api/v1/user/', (req, res)=>{
        userController.addUser(req.body, (err, result)=>{
            if(err) res.send(err);
            else res.send(result);
        })
    })

    
    // POSTS ROUTES
    app.get('/api/v1/post', async (req, res)=>{
        postController.getAllPostsData((err, result)=>{
            if(err) res.send(err);
            else res.send(result);
        })
    })

    app.get('/api/v1/post/:Id', async (req, res)=>{
        postController.getPostById(req.params.Id, (err, result)=>{
            if(err) res.send(err);
            else res.send(result);
        })
    })

    app.post('/api/v1/post/', (req, res)=>{
        postController.addPost(req.body, (err, result)=>{
            if(err) res.send(err);
            else res.send(result);
        })
    })

    app.post('/api/v1/upload-post-image/', (req, res)=>{
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.image.filepath;
            var newpath = path.join(__dirname, `../../assets/images/post/${uuidv4()}.jpg`);
            fs.rename(oldpath, newpath, function (err) {
                if(err){
                    console.log(err);
                    return res.send(err);
                }else{
                    const result = {url: newpath};
                    return res.send(result);
                }
            })
        })
    })
}

module.exports = initRoutes;
