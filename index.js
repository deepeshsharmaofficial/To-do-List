const express = require('express');
const path = require('path');

// set up the port number
const port = 8002;

// importing the DataBase
const db = require('./config/mongoose');

// importing the Schema For tasks
const Task = require('./models/task');

// using express
const app = express();

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// to use encrypted data
app.use(express.urlencoded());
// using static files
app.use(express.static('./assets'));

// rendering the App Page
app.get('/', function(req, res){
    Task.find({}, function(err, task){
        if(err){
            console.log("error in fetching contacts from db");
            return;
        }
        return res.render('home', {
            title: "To Do List",
            task_list: task
        });
    })
})

app.post('/create-task', function(req, res){
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function(err, newTodo){
        if(err) {
            console.log('Error in creating a Todo List', err);
            return;
        }
        console.log('******', newTodo);
        return res.redirect('back');
    })
});

// deleting Tasks
app.get('/delete-task', function (req, res) {
    // get the id from query
    var id = req.query;
    // checking the number of tasks selected to delete
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        // finding and deleting tasks from the DB one by one using id
        Task.findByIdAndDelete(Object.keys(id)[i], function (err) {
            if (err) {
                console.log('error in deleting task');
            }
        })
    }
    return res.redirect('back');
});

app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})
