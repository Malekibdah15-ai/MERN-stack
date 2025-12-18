const mongoose = require('mongoose');

const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;


console.log("batata");

//const uri = `mongodb+srv://${username}:${pw}@cluster0.oo5frow.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const uri = `mongodb+srv://${username}:${pw}@cluster0.oo5frow.mongodb.net/${dbName}?appName=Cluster0`
mongoose.connect(uri)
.then(() => console.log(" Established a connection to the database"))
.catch(err => console.log(" MongoDB connection error:", err));



    
// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/crmdb")
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));

