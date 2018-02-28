const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
// require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});

