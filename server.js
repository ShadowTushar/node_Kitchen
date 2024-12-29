// // console.log("Server File is Running");
// // console.log("Out");

// // var fs = require('fs');
// // var os = require('os');

// // var user = os.userInfo();
// // console.log(user);
// // console.log(user.username);

// // fs.appendFile('Greeting.txt', `Hello, ${user.username}!\n`, () => {
// //     console.log("File edited.");
// // }
// // )

// // console.log(os);
// // console.log(fs); 

// //Because Console is written in Notes file, it will always run, Always written in end
// const notes = require('./notes.js')
// //_ is the convention used for lodash
// var _ = require('lodash')

// var age = notes.age
// console.log(age);

// var sum = notes.addNumber(age, 18)
// console.log(sum);

// var data = ['person', 'person', 1, 2, 1, 2, 'age', 'age']

// var filter = _.uniq(data);
// console.log(filter);

// var data_name = "Tushar";
// console.log(_.isString(data_name));
// console.log(_.isString(true));


// const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// const jsonObject = JSON.parse(jsonString); // Convert JSON string to object
// console.log(jsonObject.name); // Output: John

// const objectToConvert = { name: "Alice", age: 25 };
// const json = JSON.stringify(objectToConvert); // Convert object to JSON string
// console.log(json); // Output: {"name": "Alice", "age":25}


// console.log(typeof json);

const express = require('express')
const app = express()
const db = require('./db')

require('dotenv').config()

const menuItem = require('./models/menuItem')

const bodyParser = require('body-parser')
app.use(bodyParser.json()) //Stores in req.body

app.get('/', function (req, res) {
    res.send('Welcome to My House')
})

    // newPerson.save((error, savedPerson) => {
    //     if (error) {
    //         console.log('Error saving Person', error)
    //         res.status(500).json({ error: 'Internal Server Error' })
    //     }
    //     else {
    //         console.log('Data saved successfully')
    //         res.status(200).json(savedPerson)
    //     }
    // })

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

const menuRoutes = require('./routes/menuRoutes')
app.use('/menu', menuRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server Running")
})  