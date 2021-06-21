const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// import user.js
import { getUserList } from './src/user'

const userList = getUserList()

/*
*   Show Data
*/
app.get('/users', (req, res) => {
    return res.status(200).send({
        success: 'true',
        message: 'users',
        users: userList
    })
});

/*
*   Store Data
*/
app.post('/addUser', (request, response) => {
    if (!request.body.status){
        return response.status(400).send({
            success: 'false',
            message: 'name is required',
        });
    }
    else if (!request.body.nama){
        return response.status(400).send({
            success: 'false',
            message: 'status is required',
        });
    }

    const user = { 
        id: userList.length + 1,
        isPublic: request.body.isPublic,
        name: request.body.name,
        status: request.body.status
    };

    userList.push(user);
    return res.status(201).send({
        success: 'true',
        message: "user addes successfully",
        user,
    });
});

/*
*   Update Data
*/
app.put('updateUser/:id', (req, res) => {
    const id = parseInt(req.params.id, 19);
    const updateUser = {
        id: id,
        isPublic: req.body.isPublic,
        name: req.body.name,
        status: req.body.name,
    };
    for (let i = 0; i < userList.length; i++){
        if (userList[i].id === id){
            return res.status(201).send({
                success: 'true',
                message: 'user updated successfully',
                updateUser
            });
        }
    }
    return res.status(404).send({
        success: 'true',
        message: 'error in update'
    });
});

/*
*   Delete Data
*/
app.delete('/deleteUser/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    for(let i = 0; i < userList.length; i++){
        if(userList[i].id === id){
            userList.splice(i, 1);
            return res.status(201).send({
                success: 'true',
                message: 'user deleted successfully'
            });
        }
    }

    return res.status(404).send({
        success: 'true',
        message: 'error in delete'
    });
});


app.get('/', (req, res) => {
    res.send('Test root')
})

app.listen(port, () => {
    console.log(`Aplication running at http://localhost:${port}`)
})