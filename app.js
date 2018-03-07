var express = require("express");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");


// const TestObject = AV.Object.extend('TestObject');
// const testObject = new TestObject();
// testObject.save({ words: 'Hello World!' }).then((testOject)=>{
//     console.log(testObject.id)
// }, (err) => {
//     console.log('Error in saving')
// });


var app = express();

// Install middleware to parse the request body
app.use(bodyParser.json());

// Route handler
app.use('/api/v1/users', require("./routers/users"));

app.use(bodyParser.json());

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World');
});