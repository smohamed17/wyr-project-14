const express = require('express') // creating express.
const path = require('path') // creating a path to be required for deployment.

const indexRouter = require('./routes/index')

const app = express() // these three will be creating the express app.

const staticFilePath = path.join(__dirname, 'client', 'dist')
const staticFiles = express.static(staticFilePath)
app.use('/', staticFiles) // we made changes to the server. 
// this won't change the files in the path.
// we are choosing the file path of the client directory/dist and serving it to the express server.

app.use('/', indexRouter) // this will go to the router.

const server = app.listen(process.env.PORT || 1305, function(){
    console.log('Server running on port ', server.address().port) // this is focusing on the port and accessing the port and console log.
}) // this will always appear on the log stream in the azure portal.
